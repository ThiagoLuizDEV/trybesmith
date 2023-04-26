import express from 'express';
import ordersController from '../controllers/orders.controller';

const router = express.Router();

router.get('/', ordersController.newOrders);

export default router;