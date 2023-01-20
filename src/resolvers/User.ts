import { Resolver, Query } from "type-graphql";
import { User, UserModel } from "../entities/User";

@Resolver((_of) => User)
export class UserResolver {
  @Query(() => [User])
  async returnAllUsers() {
    return await UserModel.find();
  }
}
