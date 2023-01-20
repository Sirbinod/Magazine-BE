import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "The User model" })
export class Category {
  [x: string]: any;
  @Field(() => ID)
  id: number;

  @Field()
  @Property({ required: true })
  name: String;

  @Field()
  @Property({ required: true })
  description: String;

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

export const CategoryModel = getModelForClass(Category);
