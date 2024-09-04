import initModels from '../models/init-models.js';
import sequelize from '../config/connectDb.js';
import responseData from '../config/responseData.js';
import { Op } from 'sequelize';
import { decodeToken } from '../config/jwtConfig.js';

const model = initModels(sequelize);

// Get all images
export const getAllImagesAPI = async (req, res) => {
  let lstImages = await model.image.findAll();
  responseData(lstImages, 'Success', 200, res);
}

// Get list of images by image name
export const getImagesByNameAPI = async (req, res) => {
  const { imageName } = req.query;

  let lstImages = await model.image.findAll({
    where: {
      'image_name': {
        [Op.like]: `%${imageName}%`,
      }
    }
  });

  responseData(lstImages, 'Success', 200, res);
}

// Get image detail by image id
export const getImageDetailByIdAPI = async (req, res) => {
  const { imageId } = req.query;

  let imageDetail = await model.image.findOne({
    where: {
      image_id: imageId,
    },
    attributes: ['image_id', 'image_name', 'path', 'description'],
    include: [
      {
        model: model.user,
        as: 'user',
        attributes: ['email', 'full_name', 'age', 'avatar']
      }
    ]
  })

  responseData(imageDetail, 'Success', 200, res);
}

// Create a new image
export const postImageAPI = async (req, res) => {
  const userInfo = decodeToken(req.headers.token);
  const { userId } = userInfo;
  const { imageName, path, description } = req.body;

  let newImage = {
    image_name: imageName,
    path,
    description,
    user_id: userId,
  };

  await model.image.create(newImage);
  responseData('', 'Success', 201, res);
}

// Delete image
export const deleteImageAPI = async (req, res) => {
  const { imageId } = req.body;
  const userInfo = decodeToken(req.headers.token);
  const { userId } = userInfo;

  // Check image is exists or correct user's image
  let checkImage = await model.image.findOne({
    where: {
      image_id: imageId,
      user_id: userId,
    }
  });

  if (!checkImage) {
    responseData('', "You don't own's photo or not found image", 404, res);
    return;
  }

  let isDeleted = await checkImage.destroy();
  if (isDeleted) responseData('', 'Deleted successful', 200, res);
}
