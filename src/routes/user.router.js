import express from 'express';
import { middlewareToken, middlewareDecodeToken } from '../config/jwtConfig.js';
import { getUserProfileAPI, updateUserProfileAPI, getCommentsPostedUserAPI, getImagesPostedUserAPI } from '../controllers/user.controller.js';
import { uploadImage } from '../config/upload.js';

const userRouter = express.Router();

userRouter.use('', middlewareToken, middlewareDecodeToken);

// Get user profile
userRouter.get('/get-profile', getUserProfileAPI);

// Update user profile
userRouter.put('/update-profile', uploadImage.single('avatar'), updateUserProfileAPI);

// Get all comments posted by user
userRouter.get('/get-comments-posted', getCommentsPostedUserAPI)

// Get all images posted by a user
userRouter.get('/get-images-posted', getImagesPostedUserAPI);

export default userRouter;
