import express from 'express';
import authRouter from './auth.router.js';

const rootRouter = express.Router();

// Auth router
rootRouter.use('/auth', authRouter);

export default rootRouter;
