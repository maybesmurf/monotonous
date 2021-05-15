import { Field, InputType } from '@nestjs/graphql';
import { IsDefined, IsEmail } from 'class-validator';

@InputType()
export class CreateInviteInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsDefined()
  teamId: string;
}
