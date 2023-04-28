import UsersModel from "../models/UsersModel";

export default class UserService {
  private usersModel: typeof UsersModel;

  constructor(usersModel: typeof UsersModel) {
    this.usersModel = usersModel;
  }

  public async getUser(id: number) {
    const user = await this.usersModel.findByPk(id);
    return user;
  }
}
