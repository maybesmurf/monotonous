import { Field, InputType } from '@nestjs/graphql';
import { IsDefined, IsEmail } from 'class-validator';

@InputType()
export class RegisterInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsDefined()
  password: string;

  @Field()
  @IsDefined()
  confirmation: string;

  @Field()
  @IsDefined()
  firstName: string;

  @Field()
  @IsDefined()
  lastName: string;
}
