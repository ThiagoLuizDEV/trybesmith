import productsModel from '../models/products.model';
import { Products } from '../interface/product.interface';

const newProduct = async (product: Products) => {
  const result = await productsModel.createProducts(product);
  return result;
};

export default {
  newProduct,
};