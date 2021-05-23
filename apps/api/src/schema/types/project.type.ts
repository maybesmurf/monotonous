import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProjectMembership } from './project_membership.type';
import { Team } from './team.type';

@ObjectType()
export class Project {
  @Field(type => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  name: string;

  @Field()
  teamId: string;
  @Field(type => Team)
  team?: Team;

  @Field(type => [ProjectMembership])
  memberships?: ProjectMembership[];

  @Field(type => ProjectMembership)
  currentMember?: ProjectMembership;
}
