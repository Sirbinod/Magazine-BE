import { InputType, Field } from "type-graphql";
import { Length, IsEmail, IsEnum } from "class-validator";

enum Role {
  ADMIN,
  AUTHER,
  USER,
}

@InputType()
export class UserInput  {
  @Field()
  @Length(1, 100)
  firstName: String;

  @Field()
  @Length(1, 100)
  lastName: String;

  @Field()
  @Length(1, 16)
  mobile: String;

  @Field()
  @IsEmail()
  email: String;

  @Field()
  @Length(8, 20)
  password: String;

  @Field()
  @Length(1, 255)
  address: String;

  @Field()
  @IsEnum(Role)
  type: Role;
}
