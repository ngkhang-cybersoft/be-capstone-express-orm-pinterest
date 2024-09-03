import initModels from '../models/init-models.js';
import sequelize from '../config/connectDb.js';
import responseData from '../config/responseData.js';

const model = initModels(sequelize);

export const getProfileUser = async (req, res) => {
  const userId = res.locals.userId;

  let data = await model.user.findOne({
    where: {
      user_id: userId,
    },
    attributes: ['email', 'full_name', 'age', 'avatar']
  })
  responseData(data, 'Success', 200, res);
}

export const updateProfile = async (req, res) => {
  const userId = res.locals.userId;
  const { fullName, age, avatar } = req.body;

  let newData = {
    full_name: fullName,
    age,
    avatar,
  }

  await model.user.update(newData, {
    where: {
      user_id: userId,
    }
  });

  responseData('', 'Success', 200, res);
}

export const getCommentsUser = async (req, res) => {
  const userId = res.locals.userId;
  let comments = await model.comment.findAll({
    where: {
      user_id: userId,
    },
    attributes: ['comment_id', 'comment_date', 'content', 'image_id']
  })
  responseData(comments, 'Success', 200, res);
}

export const getListPhotoCreated = async (req, res) => {
  const userId = res.locals.userId;

  let photoCreated = await model.image.findAll({
    where: {
      user_id: userId,
    },
    attributes: ['image_id', 'image_name', 'path', 'description']
  })
  responseData(photoCreated, 'Success', 200, res);
}

export const getListPhotoSaved = async (req, res) => {
  const userId = res.locals.userId;

  let listSavedImage = await model.saved_image.findAll({
    where: {
      user_id: userId,
    },
    attributes: ['saved_image_id', 'save_date'],
    include: [
      {
        model: model.image,
        as: 'image',
        attributes: ['image_id', 'image_name', 'path', 'description']
      }
    ]
  });

  responseData(listSavedImage, 'Success', 200, res);
}
