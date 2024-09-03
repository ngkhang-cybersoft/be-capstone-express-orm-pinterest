import express from 'express';
import authRouter from './auth.router.js';
import photoRouter from './photo.router.js';

const rootRouter = express.Router();

// Auth router
rootRouter.use('/auth', authRouter);
// Photo router
rootRouter.use('/photos', photoRouter)

export default rootRouter;
