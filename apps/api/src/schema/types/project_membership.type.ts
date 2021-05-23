import { Field, ID, ObjectType } from '@nestjs/graphql';
import { MemberRoles } from '@prisma/client';
import { Project } from './project.type';
import { TeamMembership } from './team_membership.type';

@ObjectType()
export class ProjectMembership {
  @Field(type => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

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
