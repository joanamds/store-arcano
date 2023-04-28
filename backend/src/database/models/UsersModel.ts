import { Model, DataTypes } from 'sequelize';
import db from '.';

class UsersModel extends Model {
  public id!: number;
  public email!: string;
  public username!: string;
  public name!: object;
  public password!: string;
  public phone!: string;
  public address!: object
  public __v!: number;
}

UsersModel.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'email'
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'username',
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'password'
  },
  name: {
    type: DataTypes.JSON,
    allowNull: false,
    field: 'name'
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'phone'
  },
  address: {
    type: DataTypes.JSON,
    allowNull: false,
    field: 'address'
  },
  __v: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: '__v',
  },
  }, {
    underscored: true,
    sequelize: db,
    modelName: 'users',
    timestamps: false,
  })

export default UsersModel;