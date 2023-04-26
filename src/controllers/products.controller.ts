import { Request, Response } from 'express';
import productsService from '../services/products.service';
import { Products } from '../interface/product.interface';

const newProduct = async (req: Request, res: Response) => {
  const newProducts: Products = req.body;
  const resultProducts = await productsService.newProduct(newProducts);
  return res.status(201).json(resultProducts);
};

export default {
  newProduct,
};