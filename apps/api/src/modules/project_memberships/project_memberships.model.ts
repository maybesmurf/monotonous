import { Field, ObjectType } from '@nestjs/graphql';
import { MemberRoles } from '@prisma/client';
import { BaseModel } from 'src/lib/base_model';
import { Project } from '../projects/projects.model';
import { TeamMembership } from '../team_memberships/team_memberships.model';

@ObjectType()
export class ProjectMembership extends BaseModel {
  @Field(type => MemberRoles)
  role: MemberRoles;

  @Field()
  membershipId: string;
  @Field(type => TeamMembership)
  membership?: TeamMembership;

  @Field()
  projectId: string;
  @Field(type => Project)
  project?: Project;
}
