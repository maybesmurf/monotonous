import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/lib/base_model';
import { UserProfile } from '../user_profiles/user_profiles.model';

@ObjectType()
export class User extends BaseModel {
  email: string;
  confirmed: boolean;
  profile?: UserProfile;
}
