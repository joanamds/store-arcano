import { Request, Response } from 'express';
import UsersModel from '../models/UsersModel';
import UserService from '../services/UserService';

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService(UsersModel);
  }

  public async getUser(req: Request, res: Response) {
    const { id } = req.params;
    const numberId = Number(id);
    const user = await this.userService.getUser(numberId);
    return res.status(200).json(user);
  }
}