import usersModel from '../models/users.model';
import { Users } from '../interface/user.interface';

const newUser = async (user: Users) => {
  const result = await usersModel.createUser(user);
  return result;
};

export default {
  newUser,
};