import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Team } from '../teams/teams.model';
import { User } from '../users/users.model';

@ObjectType()
export class Invite {
  @Field(type => ID)
  id: string;
  createdAt: Date;
  email: string;
  invitedById: string;
  invitedBy?: User;
  teamId: string;
  team?: Team;
}
