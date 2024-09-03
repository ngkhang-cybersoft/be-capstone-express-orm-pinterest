import express from 'express';
import { deletePhoto, getListPhotosAPI, getListPhotosByNameAPI, getPhotoDetailById, postPhoto } from '../controllers/photo.controller.js';
import { middlewareToken } from '../config/jwtConfig.js';

const photoRouter = express.Router();

// Get list of photos
photoRouter.get('/get-all-photos', getListPhotosAPI);

// Get list of photos by name
photoRouter.get('/search', getListPhotosByNameAPI);

// Get photo details and associated user information
photoRouter.get('/get-photo-detail-and-user-info', getPhotoDetailById);

// Post photo
photoRouter.post('/post-photo', middlewareToken, postPhoto);

// Delete photo
photoRouter.delete('/delete-photo', middlewareToken, deletePhoto);

export default photoRouter;
