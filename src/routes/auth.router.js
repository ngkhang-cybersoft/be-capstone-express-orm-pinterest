import express from 'express';
import { changePassword, loginAPI, logoutAPI, signUpAPI } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/login', loginAPI);
authRouter.post('/sign-up', signUpAPI);
authRouter.post('/change-password', changePassword);
authRouter.post('/logout', logoutAPI);

export default authRouter;
