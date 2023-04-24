import UsersModel from "../models/UsersModel";
import { User } from '../interfaces';

export default class ProductsService {
  private usersModel: typeof UsersModel;

  constructor(usersModel: typeof UsersModel) {
    this.usersModel = usersModel;
  }

  public async login(email: string, password: string): Promise<null | object> {
    const user = await this.usersModel.findOne({
      where: { email }
    });
    if(!user) return { status: 400, message: 'Usuário não encontrado'};
    if(user.password !== password) return { status: 401, message: 'Senha incorreta'}
    return { status: 200, message: user};
  }
}