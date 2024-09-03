import initModels from '../models/init-models.js';
import sequelize from '../config/connectDb.js';
import responseData from '../config/responseData.js';
import { Op } from 'sequelize';
import { decodeToken } from '../config/jwtConfig.js';

const model = initModels(sequelize);

export const getListPhotosAPI = async (req, res) => {
  let lstPhotos = await model.image.findAll();
  responseData(lstPhotos, 'Success', 200, res);
}

export const getListPhotosByNameAPI = async (req, res) => {
  const { name } = req.query;

  let lstPhotos = await model.image.findAll({
    where: {
      'image_name': {
        [Op.like]: `%${name}%`,
      }
    }
  })
  responseData(lstPhotos, 'Success', 200, res);
}

export const getPhotoDetailById = async (req, res) => {
  const { photoId } = req.query;

  let data = await model.image.findOne({
    where: {
      image_id: photoId,
    },
    include: [
      {
        model: model.user,
        as: 'user',
        attributes: ['email', 'full_name', 'age', 'avatar']
      }
    ]
  })

  responseData(data, 'Success', 200, res);
}

export const postPhoto = async (req, res) => {
  const userInfo = decodeToken(req.headers.token);
  const { userId } = userInfo;
  const { imageName, path, description } = req.body;

  let newData = {
    image_name: imageName,
    path,
    description,
    user_id: userId,
  };

  await model.image.create(newData);
  responseData('', 'Success', 200, res);
}

export const deletePhoto = async (req, res) => {
  const { imageId } = req.body;
  const userInfo = decodeToken(req.headers.token);
  const { userId } = userInfo;

  let checkOwnPhoto = await model.image.findOne({
    where: {
      image_id: imageId,
      user_id: userId,
    }
  });

  if (!checkOwnPhoto) {
    responseData('', "You don't own's photo", 404, res);
    return;
  }

  let isDeleted = await checkOwnPhoto.destroy()
  if (isDeleted) responseData('', "Deleted success", 200, res);
}
