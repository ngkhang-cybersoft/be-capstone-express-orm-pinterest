import express from 'express';
import { middlewareToken, middlewareDecodeToken } from '../config/jwtConfig.js';
import { getImagesSavedAPI } from '../controllers/saved.controller.js';

const savedRouter = express.Router();

savedRouter.use('', middlewareToken, middlewareDecodeToken);

// Get all images saved by user
savedRouter.get('/get-all-images-saved', getImagesSavedAPI);

export default savedRouter;
