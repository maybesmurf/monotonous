import { MemberRoles } from '.prisma/client';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/lib/base_model';
import { Team } from '../teams/teams.model';
import { User } from '../users/users.model';

@ObjectType()
export class TeamMembership extends BaseModel {
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
