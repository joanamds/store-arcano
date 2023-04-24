import { Model, DataTypes } from 'sequelize';
import db from '.';

class ProductsModel extends Model {
  public id!: number;
  public title!: string;
  public price!: number;
  public description!: string;
  public category!: string;
  public image!: string;
  public rating!: object
}

ProductsModel.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'title'
  },
  price: {
    type: DataTypes.DECIMAL(7, 2),
    allowNull: false,
    field: 'price',
  },
  description: {
    type: DataTypes.STRING(900),
    allowNull: false,
    field: 'description'
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'category'
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'image',
  },
  rating: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null
  }}, {
    underscored: true,
    sequelize: db,
    modelName: 'products',
    timestamps: false,
  })

export default ProductsModel;