import {Router} from 'express';
import { 
    signUp, 
    signIn, 
    updateUser, 
    deleteUser, 
    getAllUsers, 
    getSpecialUserNameAndAge, 
    getUserNameEndsWith,
    getUserNameContains,
    findUserWithName, 
    deleteAllUsers  
} from './users.controller.js';
import {asyncHandler} from '../../utils/asyncHandler.js'
import {validate} from '../../middlewares/validate.js'
import { registerSchema, loginSchema, updateUserSchema, deleteUserSchema, getSpecialUserNameAndAgeSchema, findUserWithNameSchema } from './user.validation.js';

const router = Router();

router.post(`/register`, validate(registerSchema) ,asyncHandler(signUp));
router.post('/signin', validate(loginSchema) ,asyncHandler(signIn));
router.put('/updateuser', validate(updateUserSchema) ,asyncHandler(updateUser));
router.delete('/deleteuser', validate(deleteUserSchema) ,asyncHandler(deleteUser));
router.get('/getallusers', asyncHandler(getAllUsers));
router.get('/getSpecialUserNameAndAge/:x/:y', validate(getSpecialUserNameAndAgeSchema) ,asyncHandler(getSpecialUserNameAndAge));
router.get('/getUserNameEndsWith/:x', validate(findUserWithNameSchema) ,asyncHandler(getUserNameEndsWith));
router.get('/getUserNameContains/:x', validate(findUserWithNameSchema) ,asyncHandler(getUserNameContains))
router.get(`/getuserbyid`, asyncHandler(findUserWithName));
router.delete(`/deleteall`, asyncHandler(deleteAllUsers));

export default router;