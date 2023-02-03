import { prop, getModelForClass } from "@typegoose/typegoose";

enum Role {
  admin = "admin",
  auther = "auther",
  user = "user",
}

export class User {
  @prop({ type: () => String, required: true, trim: true })
  id?: string;

  @prop({ type: () => String, required: true, trim: true })
  firstName?: String;

  @prop({ type: () => String, required: true, trim: true })
  lastName: String;

  @prop({ type: () => String, required: false })
  mobile: String;

  @prop({ type: () => String, required: true, uniqu: true })
  email: String;

  @prop({ type: () => String, required: true })
  password: String;

  @prop({ type: () => String, required: true })
  address: String;

  @prop({ type: () => String, enum: Object.values(Role), default: Role.user })
  type: string;

  @prop({ type: () => Boolean, default: false })
  isActive: boolean;

  @prop({ type: () => Date, default: Date.now() })
  createdAt: Date;

  @prop({ type: () => Date })
  updateAt: Date;

  @prop({ type: () => String, required: true })
  updateBy: string;
}

export const UserModel = getModelForClass(User);
