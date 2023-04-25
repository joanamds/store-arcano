import CartsModel from "../models/CartsModel";
import CartItemsModel from "../models/CartItemsModel";
import ProductsModel from "../models/ProductsModel";

export default class CartHistoryService {
  private cartsModel: typeof CartsModel;
  private cartItemsModel: typeof CartItemsModel;
  private productsModel: typeof ProductsModel;

  constructor(
    cartsModel: typeof CartsModel,
    cartItemsModel: typeof CartItemsModel,
    productsModel: typeof ProductsModel,
  ) {
    this.cartsModel = cartsModel
    this.cartItemsModel = cartItemsModel;
    this.productsModel = productsModel;
  }

  public async getCarts(id: number): Promise<any> {
    const carts = await this.cartsModel.findAll({
      where: { userId: id },
      include: {
        model: this.cartItemsModel,
        as: 'cartItems',
        include: [{
          model: this.productsModel,
          as: 'products',
          attributes: ['title', 'image', 'price'],
        }],
        attributes: ['quantity'],
      },
    });
    return carts;
  }
}
