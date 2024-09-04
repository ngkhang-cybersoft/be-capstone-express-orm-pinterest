import initModels from '../models/init-models.js';
import sequelize from '../config/connectDb.js';
import responseData from '../config/responseData.js';

const model = initModels(sequelize);

// Get user profile
export const getUserProfileAPI = async (req, res) => {
  const userId = res.locals.userId;

  let data = await model.user.findOne({
    where: {
      user_id: userId,
    },
    attributes: ['email', 'full_name', 'age', 'avatar']
  })
  responseData(data, 'Success', 200, res);
}

// Update user profile
export const updateUserProfileAPI = async (req, res) => {
  const userId = res.locals.userId;
  const { fullName, age, avatar } = req.body;

  const userProfile = await model.user.findOne({
    where: {
      user_id: userId,
    }
  });


  let newData = {
    full_name: fullName || userProfile.dataValues.full_name,
    age: age || userProfile.dataValues.age,
    avatar: avatar || userProfile.dataValues.avatar,
  }

  await model.user.update(newData, {
    where: {
      user_id: userId,
    }
  });

  responseData('', 'Success', 200, res);
}

// Get all comments posted by user
export const getCommentsPostedUserAPI = async (req, res) => {
  const userId = res.locals.userId;
  let comments = await model.comment.findAll({
    where: {
      user_id: userId,
    },
    attributes: ['comment_id', 'comment_date', 'content', 'image_id']
  })
  responseData(comments, 'Success', 200, res);
}

// Get all images posted by a user
export const getImagesPostedUserAPI = async (req, res) => {
  const userId = res.locals.userId;

  let imagesPosted = await model.image.findAll({
    where: {
      user_id: userId,
    },
    attributes: ['image_id', 'image_name', 'path', 'description']
  })
  responseData(imagesPosted, 'Success', 200, res);
}
