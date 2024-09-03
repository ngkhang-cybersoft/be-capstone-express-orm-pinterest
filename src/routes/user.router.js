import express from 'express';
import { decodeToken, middlewareToken } from '../config/jwtConfig.js';
import { getCommentsUser, getListPhotoCreated, getListPhotoSaved, getProfileUser, updateProfile } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.use('', middlewareToken, (req, res, next) => {
  const token = res.locals.token;
  const userInfo = decodeToken(token);
  const { userId } = userInfo;
  res.locals.userId = userId;
  next();
});

// Get user profile
userRouter.get('/get-profile', getProfileUser);

// Update user profile
userRouter.put('/update-profile', updateProfile);

// Get list comments posted by user
userRouter.get('/get-comments', getCommentsUser)

// Get list photo created by user
userRouter.get('/get-photos-created', getListPhotoCreated);

// Get list photos saved by user
userRouter.get('/saved-photos', getListPhotoSaved)

export default userRouter;
