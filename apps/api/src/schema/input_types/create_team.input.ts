import { Field, InputType } from '@nestjs/graphql';
import { IsDefined, MinLength } from 'class-validator';

@InputType()
export class CreateTeamInput {
  @Field()
  @IsDefined()
  @MinLength(3)
  name: string;
}
