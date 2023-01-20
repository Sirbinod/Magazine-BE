import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { Ref } from "../types";
import { Category } from "./Categories";
import { User } from "./User";

@ObjectType({ description: "The User model" })
export class Post {
  [x: string]: any;
  @Field(() => ID)
  id: number;

  @Field()
  @Property({ required: true })
  title: String;

  @Field()
  @Property({ required: true })
  content: String;

  @Field()
  @Property({ required: false })
  datePosted: Date;

  @Field()
  @Property({ default: false })
  isActive: boolean;

  @Field((_type) => String)
  @Property({ ref: Category })
  category_id: Ref<Category>;

  @Field((_type) => String)
  @Property({ ref: User })
  auther: Ref<User>;

  @Field()
  @Property({})
  createdAt: Date;

  @Field()
  @Property({ required: true })
  createdBt: String;

  @Field()
  @Property({})
  updateAt: Date;

  @Field()
  @Property({ required: true })
  updateBy: String;
}

export const PostModel = getModelForClass(Post);
