import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/lib/base_model';
import { User } from '../users/users.model';

@ObjectType()
export class UserProfile extends BaseModel {
  firstName: string;
  lastName: string;
  userId: string;
  user?: User;
}
