import { Request, Response } from 'express';
import CartHistoryService from '../services/CartHistoryService';
import CartHistoryModel from '../models/CartHistoryModel';

export default class ProductsController {
  private cartHistoryService: CartHistoryService;

  constructor() {
    this.cartHistoryService = new CartHistoryService(CartHistoryModel);
  }

  public async getCarts(req: Request, res: Response) {
    const { id } = req.params;
    const numberId = Number(id);
    const carts = await this.cartHistoryService.getCarts(numberId);
    return res.status(200).json(carts);
  }
}