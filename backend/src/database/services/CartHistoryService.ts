import CartHistoryModel from "../models/CartHistoryModel";

export default class CartHistoryService {
  private cartHistoryModel: typeof CartHistoryModel;

  constructor(cartHistoryModel: typeof CartHistoryModel) {
    this.cartHistoryModel = cartHistoryModel;
  }

  public async getCarts(id: number): Promise<any> {
    const carts = await this.cartHistoryModel.findAll({ where: { userId: id}});
    return carts;
  }
}