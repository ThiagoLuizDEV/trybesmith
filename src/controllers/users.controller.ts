import { Request, Response } from 'express';
import usersService from '../services/users.service';
import { Users } from '../interface/user.interface';
import generateToken from '../utils/auth';

const newUser = async (req: Request, res: Response) => {
  const users: Users = req.body;
  const result = await usersService.newUser(users);
  const resultToken = generateToken(result);
  return res.status(201).json({ token: resultToken });
};
  
export default {
  newUser,
};