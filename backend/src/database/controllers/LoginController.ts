import { Request, Response } from 'express';
import LoginService from '../services/LoginService';
import UsersModel from '../models/UsersModel';

export default class ProductsController {
  private loginService: LoginService;

  constructor() {
    this.loginService = new LoginService(UsersModel);
  }

  public async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await this.loginService.login(email, password);
    const { status, message } = user;
    if(status === 200) {
      return res.status(status).json({ token: message });
    }
    return res.status(status).json({ message });
  }
}