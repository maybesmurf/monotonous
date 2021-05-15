import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Team } from '../teams/teams.model';
import { User } from '../users/users.model';

@ObjectType()
export class Invite {
  @Field(type => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  email: string;

  @Field()
  invitedById: string;
  @Field(type => User)
  invitedBy?: User;

  @Field()
  teamId: string;
  @Field(type => Team)
  team?: Team;
}
