import { Model, DataTypes } from 'sequelize';
import db from '.';
import CartsModel from './CartsModel';

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
  },
  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'cartItem',
  timestamps: true,
  paranoid: true,
  underscored: true,
});

CartItemsModel.belongsTo(CartsModel, {
  as: 'cart',
  foreignKey: 'cartId',
});

export default CartItemsModel;
