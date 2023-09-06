import {Router} from 'express';
import { addPost, updatePost, deletePost, getPostById, getAllPosts, sortedPostsByDate } from './posts.controller.js';
import { asyncHandler } from '../../utils/asyncHandler.js';

const router = Router();

router.post('/addpost', asyncHandler(addPost));

router.post('/updatepost', asyncHandler(updatePost));

router.delete('/deletepost', asyncHandler(deletePost));

router.get('/getPostById/:_id', asyncHandler(getPostById));

router.get('/all-posts', asyncHandler(getAllPosts))

router.get('/newest-posts', asyncHandler(sortedPostsByDate))

export default router