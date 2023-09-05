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

const router = Router();

router.post(`/registeruser`, signUp);
router.post('/signin', signIn);
router.post('/updateuser', updateUser);
router.delete('/deleteuser', deleteUser);
router.get('/getallusers', getAllUsers);
router.get('/getSpecialUserNameAndAge/:x/:y', getSpecialUserNameAndAge);
router.get('/getUserNameEndsWith/:x', getUserNameEndsWith);
router.get('/getUserNameContains', getUserNameContains)
router.get(`/getuserbyid`, findUserWithName);
router.delete(`/deleteall`, deleteAllUsers);

export default router;