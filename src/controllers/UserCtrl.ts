import { Request, Response } from "express";
import UserService from "../services/UserService";

export default class UserCtrl {
  constructor() {}

  async getAllUsers(req: Request, res: Response) {
    try {
      console.log("connnnnnnnnnnnnnnnnn");

      const user = await UserService.getAllUsers(req);
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  }
}
