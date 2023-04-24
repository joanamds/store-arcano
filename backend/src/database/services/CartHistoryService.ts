import CartsModel from "../models/CartsModel";
import CartItemsModel from "../models/CartItemsModel";

export default class CartHistoryService {
  private cartsModel: typeof CartsModel;
  private cartItemsModel: typeof CartItemsModel;

  constructor(
    cartsModel: typeof CartsModel,
    cartItemsModel: typeof CartItemsModel,
  ) {
    this.cartsModel = cartsModel
    this.cartItemsModel = cartItemsModel;
  }
  public async getCarts(id: number): Promise<any> {
    const carts = await this.cartsModel.findAll(
      { where: { userId: id },
      include: {
        model: this.cartItemsModel,
        as: 'cartItems'}
      },
      );
    return carts;
  }
}