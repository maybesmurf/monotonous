import { MemberRoles } from '.prisma/client';
import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/lib/base_model';
import { Project } from '../projects/projects.model';
import { TeamMembership } from '../team_memberships/team_memberships.model';

@ObjectType()
export class ProjectMembership extends BaseModel {
  role: MemberRoles;
  membershipId: string;
  membership?: TeamMembership;
  projectId: string;
  project?: Project;
}
