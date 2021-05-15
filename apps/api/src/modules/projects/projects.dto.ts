import { Field, InputType } from '@nestjs/graphql';
import { IsDefined, MinLength } from 'class-validator';

@InputType()
export class CreateProjectInput {
  @Field()
  @IsDefined()
  @MinLength(3)
  name: string;

  @Field()
  @IsDefined()
  teamId: string;
}
