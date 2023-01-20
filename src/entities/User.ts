import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

enum Role {
  ADMIN,
  AUTHER,
  USER,
}

@ObjectType({ description: "The User model" })
export class User {
  [x: string]: any;
  @Field(() => ID)
  id: number;

  @Field()
  @Property({ required: true })
  firstName: String;

  @Field()
  @Property({ required: true })
  lastName: String;

  @Field()
  @Property({ required: false })
  mobile: String;

  @Field()
  @Property({ required: true, uniqu: true })
  email: String;

  @Field()
  @Property({ required: true })
  password: String;

  @Field()
  @Property({ required: true })
  address: String;

  @Field()
  @Property({ enum: Role, default: Role.USER })
  type: Role;

  @Field()
  @Property({ default: false })
  isActive: boolean;

  @Field()
  @Property({})
  createdAt: Date;

  @Field()
  @Property({})
  updateAt: Date;

  @Field()
  @Property({ required: true })
  updateBy: String;
}

export const UserModel = getModelForClass(User);
