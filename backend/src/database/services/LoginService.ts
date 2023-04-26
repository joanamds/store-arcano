import * as jwt from 'jsonwebtoken';
import UsersModel from "../models/UsersModel";
import { StatusMessage } from '../interfaces';
import { jwtConfig, secret } from '../token/validateJWT';

export default class ProductsService {
  private usersModel: typeof UsersModel;

  constructor(usersModel: typeof UsersModel) {
    this.usersModel = usersModel;
  }

  public async login(email: string, password: string): Promise<StatusMessage> {
    const user = await this.usersModel.findOne({
      where: { email }
    });
    if(!user) return { status: 401, message: 'Email not found'};
    if(user.password !== password) return { status: 401, message: 'Incorrect password'};
    const token = jwt.sign(
      { id: user.dataValues.id }, 
      secret, 
      jwtConfig
    );
    return { status: 200, message: token};
  }
}