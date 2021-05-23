import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Team } from './team.type';
import { User } from './user.type';

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
