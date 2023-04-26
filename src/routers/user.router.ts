import express from 'express';
import usersController from '../controllers/users.controller';

const router = express.Router();

router.post('/', usersController.insertUser);

export default router;