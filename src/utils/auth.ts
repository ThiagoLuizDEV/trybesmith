import jwt, { SignOptions } from 'jsonwebtoken';
import { Users } from '../interface/user.interface';

const secret = process.env.JWT_SECRET || 'senha secreta';
const configJWT: SignOptions = { 
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (payload: Users) => {
  const token = jwt.sign(payload, secret, configJWT);
  return token;
};

export default generateToken; 