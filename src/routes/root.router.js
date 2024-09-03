import express from 'express';
import authRouter from './auth.router.js';
import photoRouter from './photo.router.js';
import commentRouter from './comment.router.js';
import userRouter from './user.router.js';

const rootRouter = express.Router();

// Auth router
rootRouter.use('/auth', authRouter);
// Photo router
rootRouter.use('/photos', photoRouter)
// Comment router
rootRouter.use('/comment', commentRouter);
// User router
rootRouter.use('/user', userRouter);

export default rootRouter;
