import {Router} from 'express';
import { addProduct, updateProduct, deleteProduct, getProductById } from './products.controller.js';

const router = Router();

router.get('/addproduct', addProduct);

router.post('/updateproduct', updateProduct);

router.delete('/deleteproduct', deleteProduct);

router.get('/getProductById/:_id', getProductById);

export default router