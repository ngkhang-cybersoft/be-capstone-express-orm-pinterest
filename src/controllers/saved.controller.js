import initModels from '../models/init-models.js';
import sequelize from '../config/connectDb.js';
import responseData from '../config/responseData.js'

const model = initModels(sequelize);

// Get all images saved by user
export const getImagesSavedAPI = async (req, res) => {
  const userId = res.locals.userId;

  let listSavedImages = await model.saved_image.findAll({
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

  responseData(listSavedImages, 'Success', 200, res);
}

export const savedImageAPI = async (req, res) => {
  const userId = res.locals.userId;
  const { imageId } = req.body;

  let checkImage = await model.image.findOne({
    where: {
      image_id: imageId,
    }
  });

  if (!checkImage) {
    responseData('', 'Not found image', 404, res);
    return;
  }

  let isImageSaved = await model.saved_image.findOne({
    where: {
      user_id: userId,
      image_id: imageId,
    }
  })

  if (isImageSaved) {
    responseData('', 'Image be saved', 200, res);
    return;
  };

  let infoSavedImage = {
    user_id: userId,
    image_id: imageId,
    save_date: new Date().getTime(),
  }

  await model.saved_image.create(infoSavedImage);
  responseData('', 'Save image is successful', 200, res);
}
