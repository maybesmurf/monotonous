import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/lib/base_model';
import { User } from '../users/users.model';

@ObjectType()
export class UserProfile extends BaseModel {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(type => String, { nullable: true })
  fullName?: string;

  @Field()
  userId: string;

  @Field(type => User)
  user?: User;
}
