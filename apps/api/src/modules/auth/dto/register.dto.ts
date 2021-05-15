import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsDefined, IsEmail, MinLength } from 'class-validator';
import { Match } from 'src/decorators/match.validator';

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
  @Match('password')
  confirmation: string;

  @Field()
  @IsDefined()
  firstName: string;

  @Field()
  @IsDefined()
  @MinLength(10)
  lastName: string;
}
