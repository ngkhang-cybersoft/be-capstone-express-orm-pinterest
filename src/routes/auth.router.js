import express from 'express';
import { loginAPI, logoutAPI } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/login', loginAPI);
authRouter.post('/logout', logoutAPI);

export default authRouter;
