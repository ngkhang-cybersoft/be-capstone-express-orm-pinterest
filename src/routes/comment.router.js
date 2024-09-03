import express from 'express';
import { getCommentOfPhoto, postComment } from '../controllers/comment.controller.js';
import { middlewareToken } from '../config/jwtConfig.js';

const commentRouter = express.Router();

// Get all comment of photo
commentRouter.get('/get-comment-by-id', getCommentOfPhoto);

// Post new comment
commentRouter.post('/post-comment', middlewareToken, postComment);

export default commentRouter;
