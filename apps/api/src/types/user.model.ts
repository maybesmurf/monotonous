import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/lib/base_model';

@ObjectType()
export class User extends BaseModel {
  @Field()
  email: string;

  @Field()
  confirmed: boolean;
}
