import { Request, Response } from 'express';
import productsService from '../services/products.service';
import { Products } from '../interface/product.interface';

const newProduct = async (req: Request, res: Response) => {
  const newProducts: Products = req.body;
  const resultProducts = await productsService.newProduct(newProducts);
  return res.status(201).json(resultProducts);
};

async function getAll(req: Request, res: Response) {
  const result = await productsService.getAll();
  return res.status(200).json(result);
}

export default {
  newProduct,
  getAll,
};