import {Request, Response} from "express";
import UserService from "./UserService";

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getUsers();
      res.status(200).json(users)
    } catch (e) {
      res.status(500)
    }
  }
}

export default new UserController();