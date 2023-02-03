import { UserModel } from "../entities/User";

class UserService {
  constructor() {}

  getAllUsers(options: any) {
    return UserModel.find(options);
  }
}

export default new UserService();
