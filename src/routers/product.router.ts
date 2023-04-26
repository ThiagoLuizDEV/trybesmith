import express from 'express';
import productsController from '../controllers/products.controller';

const router = express.Router();

router.post('/', productsController.newProduct);
router.get('/', productsController.getAll);

export default router;