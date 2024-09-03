import sequelize from '../config/connectDb.js';
import { decodeToken } from '../config/jwtConfig.js';
import responseData from '../config/responseData.js';
import initModels from '../models/init-models.js';

const model = initModels(sequelize);

export const getCommentOfPhoto = async (req, res) => {
  const { imageId } = req.query;

  const checkPhoto = await model.image.findOne({
    where: {
      image_id: imageId,
    }
  })

  if (!checkPhoto) {
    responseData('', 'Not found image', 404, res);
    return;
  }

  const comments = await model.comment.findAll({
    where: {
      image_id: imageId,
    }
  })

  responseData(comments, 'Success', 200, res);
}

export const postComment = async (req, res) => {
  const userInfo = decodeToken(req.headers.token);
  const { userId } = userInfo;

  const { imageId, content } = req.body;

  let checkImage = await model.image.findOne({
    where: {
      image_id: imageId,
    }
  });

  if (!checkImage) {
    responseData('', 'Not found photo', 404, res);
    return;
  }

  let newComment = {
    image_id: imageId,
    comment_date: new Date().getTime(),
    content,
    user_id: userId,
  }

  await model.comment.create(newComment);
  responseData('', 'Success', 200, res)
}

