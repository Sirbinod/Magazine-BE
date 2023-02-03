import { Router } from "express";
import UserCtrl from "../controllers/UserCtrl";

class UserRouter {
  router = Router();
  userCtrl = new UserCtrl();

  constructor() {
    this.intializeRouter();
  }
  intializeRouter() {
    console.log("what is the 000000");
    this.router.route("/").get(this.userCtrl.getAllUsers);
  }
}
export default new UserRouter().router;
