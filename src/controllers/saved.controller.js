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
