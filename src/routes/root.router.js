import express from 'express';
import {
  authRouter,
  imageRouter,
  commentRouter,
  userRouter,
  savedRouter
} from './index.router.js';

const rootRouter = express.Router();

// Auth router
rootRouter.use('/auth', authRouter);

// Image router
rootRouter.use('/image', imageRouter);

// Comment router
rootRouter.use('/comment', commentRouter);

// User router
rootRouter.use('/user', userRouter);

// Saved router
rootRouter.use('/saved', savedRouter);

export default rootRouter;
