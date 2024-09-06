import express from 'express';
import { getAllImagesAPI, getImageDetailByIdAPI, getImagesByNameAPI, postImageAPI, deleteImageAPI } from '../controllers/image.controller.js';
import { middlewareDecodeToken, middlewareToken } from '../config/jwtConfig.js';
import { uploadImage } from '../config/upload.js';

const imageRouter = express.Router();

// Get all images
imageRouter.get('/get-all-images', getAllImagesAPI);

// Get list of images by image name
imageRouter.get('/get-images-by-name', getImagesByNameAPI);

// Get image detail by image id
imageRouter.get('/get-image-detail', getImageDetailByIdAPI);

imageRouter.use('', middlewareToken, middlewareDecodeToken);

// Create a new image
imageRouter.post('/post-image', uploadImage.single('path'), postImageAPI);

// Delete image
imageRouter.delete('/delete', deleteImageAPI);

export default imageRouter;
