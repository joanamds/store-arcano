import { Model, DataTypes } from 'sequelize';
import db from '.';
import CartItemsModel from './CartItemsModel';

class CartsModel extends Model {
  public id!: number;
  public userId!: number;
  public readonly cartItems?: CartItemsModel[];
}

CartsModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'carts',
  timestamps: true,
  paranoid: true,
  underscored: true,
});

CartsModel.hasMany(CartItemsModel, {
  as: 'cartItems',
  foreignKey: 'cartId',
});

export default CartsModel;
