import { MemberRoles } from '.prisma/client';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/lib/base_model';
import { Team } from '../teams/teams.model';
import { User } from '../users/users.model';

@ObjectType()
export class TeamMembership extends BaseModel {
  role: MemberRoles;
  userId: string;
  user?: User;
  teamId: string;
  team?: Team;
}
