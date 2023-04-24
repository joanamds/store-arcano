import ProductsModel from "../models/ProductsModel";
import { Product } from '../interfaces';

export default class ProductsService {
  private productsModel: typeof ProductsModel;

  constructor(productsModel: typeof ProductsModel) {
    this.productsModel = productsModel;
  }

  public async getAllProducts(): Promise<Product[]> {
    const products = await this.productsModel.findAll();
    const parsedProducts = products.map((product) => ({
      id: product.id,
      title: product.title,
      price: Number(product.price),
      description: product.description,
      category: product.category,
      image: product.image,
      rating: product.rating
    }));
    return parsedProducts;
  }
}