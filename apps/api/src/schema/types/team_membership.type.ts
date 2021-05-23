import { MemberRoles } from '.prisma/client';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Team } from './team.type';
import { User } from './user.type';

@ObjectType()
export class TeamMembership {
  @Field(type => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(type => MemberRoles)
  role: MemberRoles;

  @Field()
  userId: string;
  @Field(type => User)
  user?: User;

  @Field()
  teamId: string;
  @Field(type => Team)
  team?: Team;
}
