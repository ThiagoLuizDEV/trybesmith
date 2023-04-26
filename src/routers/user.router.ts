import express from 'express';
import usersController from '../controllers/users.controller';

const router = express.Router();

router.post('/', usersController.newUser);

export default router;