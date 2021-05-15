import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/lib/base_model';
import { ProjectMembership } from '../project_memberships/project_memberships.model';
import { ProjectMembershipsResolver } from '../project_memberships/project_memberships.resolver';
import { Team } from '../teams/teams.model';

@ObjectType()
export class Project extends BaseModel {
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
