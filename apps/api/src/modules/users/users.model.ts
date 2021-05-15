import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/lib/base_model';
import { UserProfile } from '../user_profiles/user_profiles.model';

@ObjectType()
export class User extends BaseModel {
  @Field()
  email: string;

  @Field()
  confirmed: boolean;

  @Field(type => UserProfile)
  profile?: UserProfile;
}
