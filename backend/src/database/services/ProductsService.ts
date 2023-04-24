import ProductsModel from "../models/ProductsModel";
import { Product } from '../interfaces';

export default class ProductsService {
  private productsModel: typeof ProductsModel;

  constructor(productsModel: typeof ProductsModel) {
    this.productsModel = productsModel;
  }

  public async getAllProducts(): Promise<Product[]> {
    const products = await this.productsModel.findAll();
    return products;
  }
}