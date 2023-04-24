import { Model, DataTypes } from 'sequelize';
import db from '.';

import CartsModel from './CartsModel';
import CartItemsModel from './CartItemsModel';

class CartHistoryModel extends Model {
  public id!: number;
  public userId!: number;
  public date!: string;
  public totalValue!: number;

  public carts!: CartsModel[];
  public cartItems!: CartItemsModel[];
}

CartHistoryModel.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalValue: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'cart_history',
  timestamps: false,
});

CartHistoryModel.hasMany(CartsModel, { foreignKey: 'userId', as: 'carts' });
CartHistoryModel.hasMany(CartItemsModel, { foreignKey: 'cartId', as: 'cartItems' });
CartsModel.belongsTo(CartHistoryModel, { foreignKey: 'userId' });
CartItemsModel.belongsTo(CartsModel, { foreignKey: 'cartId' });

export default CartHistoryModel;
