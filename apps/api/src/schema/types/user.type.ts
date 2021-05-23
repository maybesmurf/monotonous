import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserProfile } from './user_profile.type';

@ObjectType()
export class User {
  @Field(type => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  email: string;

  @Field()
  confirmed: boolean;

  @Field(type => UserProfile)
  profile?: UserProfile;
}
