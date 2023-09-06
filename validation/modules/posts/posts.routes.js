import {Router} from 'express';
import { addPost, updatePost, deletePost, getPostById, getAllPosts, sortedPostsByDate } from './posts.controller.js';
import { asyncHandler } from '../../utils/asyncHandler.js';
import {validate} from '../../middlewares/validate.js'
import { addPostSchema, deletePostSchema, getPostSchema, updatePostSchema } from './posts.validation.js';

const router = Router();

router.post('/addpost', validate(addPostSchema), asyncHandler(addPost));

router.put('/updatepost', validate(updatePostSchema), asyncHandler(updatePost));

router.delete('/deletepost', validate(deletePostSchema), asyncHandler(deletePost));

router.get('/getPostById/:_id', validate(getPostSchema), asyncHandler(getPostById));

router.get('/all-posts', asyncHandler(getAllPosts))

router.get('/newest-posts', asyncHandler(sortedPostsByDate))

export default router