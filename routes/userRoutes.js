import express from 'express';
import { createUser, userList } from '../controllers/usersController.js';
const router = express.Router();


router.get('/users', userList)

router.post('/users', createUser);


export default router;