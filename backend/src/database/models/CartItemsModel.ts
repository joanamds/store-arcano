import { Model, DataTypes } from 'sequelize';
import db from '.';

class CartItemsModel extends Model {
  public id!: number;
  public productId!: number;
  public cartId!: number;
  public quantity!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CartItemsModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id'
  },
  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'cart_id'
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'cartItems',
  timestamps: true,
  paranoid: true,
  underscored: true,
});

export default CartItemsModel;
