import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const newOrders = async (req: Request, res: Response) => {
  const result = await ordersService.newOrders();
  return res.status(200).json(result);
};

export default {
  newOrders,
};