import productsModel from '../models/products.model';
import { Products } from '../interface/product.interface';

const newProduct = async (product: Products) => {
  const result = await productsModel.createProducts(product);
  return result;
};

async function getAll(): Promise<Products[]> {
  const result = await productsModel.getAll();
  return result;
}

export default {
  newProduct,
  getAll,
};