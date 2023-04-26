import { Model, DataTypes } from 'sequelize';
import db from '.';
import CartItemsModel from './CartItemsModel';
import UsersModel from './UsersModel';

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
    field: 'user_id'
  },
}, {
  sequelize: db,
  modelName: 'carts',
  timestamps: false,
  underscored: true,
});

CartItemsModel.belongsTo(CartsModel, { foreignKey: 'cartId', as: 'carts'});
CartsModel.belongsTo(UsersModel, { foreignKey: 'userId', as: 'users' });

UsersModel.hasMany(CartsModel, { as: 'carts' });
CartsModel.hasMany(CartItemsModel, { as: 'cartItems' });

export default CartsModel;
