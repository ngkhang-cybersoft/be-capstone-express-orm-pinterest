import express from 'express';
import { getCommentsOfImageAPI, postCommentAPI } from '../controllers/comment.controller.js';
import { middlewareToken } from '../config/jwtConfig.js';

const commentRouter = express.Router();

// Get all comments of image
commentRouter.get('/get-comments-of-image', getCommentsOfImageAPI);

// Post new comment
commentRouter.post('/post-comment', middlewareToken, postCommentAPI);

export default commentRouter;
