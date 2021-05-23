import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './user.type';

@ObjectType()
export class UserProfile {
  @Field(type => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

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
