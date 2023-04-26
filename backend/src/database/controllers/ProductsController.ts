import { Request, Response } from 'express';
import ProductsService from '../services/ProductsService';
import ProductsModel from '../models/ProductsModel';

export default class ProductsController {
  private productsService: ProductsService;

  constructor() {
    this.productsService = new ProductsService(ProductsModel);
  }

  public async getAllProducts(_req: Request, res: Response) {
    const products = await this.productsService.getAllProducts();
    return res.status(200).json(products);
  }
}