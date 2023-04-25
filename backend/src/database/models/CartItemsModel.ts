import { Model, DataTypes } from 'sequelize';
import db from '.';
import ProductsModel from './ProductsModel';

class CartItemsModel extends Model {
  public id!: number;
  public productId!: number;
  public cartId!: number;
  public quantity!: number;
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
  timestamps: false,
  underscored: true,
});

CartItemsModel.hasMany(ProductsModel, { foreignKey: 'productId', as: 'products'});
ProductsModel.belongsTo(CartItemsModel, { as: 'cartItems' });

export default CartItemsModel;
