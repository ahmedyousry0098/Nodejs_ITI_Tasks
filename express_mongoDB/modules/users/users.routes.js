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

const router = Router();

router.post(`/register`, asyncHandler(signUp));
router.post('/signin', asyncHandler(signIn));
router.put('/updateuser', asyncHandler(updateUser));
router.delete('/deleteuser', asyncHandler(deleteUser));
router.get('/getallusers', asyncHandler(getAllUsers));
router.get('/getSpecialUserNameAndAge/:x/:y', asyncHandler(getSpecialUserNameAndAge));
router.get('/getUserNameEndsWith/:x', asyncHandler(getUserNameEndsWith));
router.get('/getUserNameContains', asyncHandler(getUserNameContains))
router.get(`/getuserbyid`, asyncHandler(findUserWithName));
router.delete(`/deleteall`, asyncHandler(deleteAllUsers));

export default router;