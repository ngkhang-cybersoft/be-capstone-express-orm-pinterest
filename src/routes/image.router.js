import express from 'express';
import { getAllImagesAPI, getImageDetailByIdAPI, getImagesByNameAPI, postImageAPI, deleteImageAPI } from '../controllers/image.controller.js';
import { middlewareToken } from '../config/jwtConfig.js';

const imageRouter = express.Router();

// Get all images
imageRouter.get('/get-all-images', getAllImagesAPI);

// Get list of images by image name
imageRouter.get('/get-images-by-name', getImagesByNameAPI);

// Get image detail by image id
imageRouter.get('/get-image-detail', getImageDetailByIdAPI);

// Create a new image
imageRouter.post('/post-image', middlewareToken, postImageAPI);

// Delete image
imageRouter.delete('/delete', middlewareToken, deleteImageAPI);

export default imageRouter;
