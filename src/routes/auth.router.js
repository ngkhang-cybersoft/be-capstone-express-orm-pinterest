import express from 'express';
import { loginAPI, signUpAPI, changePasswordAPI } from '../controllers/auth.controller.js';

const authRouter = express.Router();

// Login API
authRouter.post('/login', loginAPI);

// Sign Up API
authRouter.post('/sign-up', signUpAPI);

// Change password API
authRouter.post('/change-password', changePasswordAPI);

export default authRouter;
