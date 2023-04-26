import ordersModel from '../models/orders.model';

const newOrders = async () => {
  const result = await ordersModel.getAll();
  return result;
};

export default {
  newOrders,
};