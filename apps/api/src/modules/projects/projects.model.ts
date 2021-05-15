import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/lib/base_model';
import { ProjectMembership } from '../project_memberships/project_memberships.model';
import { Team } from '../teams/teams.model';

@ObjectType()
export class Project extends BaseModel {
  name: string;
  teamId: string;
  team?: Team;
  memberships?: ProjectMembership[];
}
