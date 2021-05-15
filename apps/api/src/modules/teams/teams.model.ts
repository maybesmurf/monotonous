import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/lib/base_model';
import { Invite } from '../invites/invites.model';
import { Project } from '../projects/projects.model';
import { TeamMembership } from '../team_memberships/team_memberships.model';

@ObjectType()
export class Team extends BaseModel {
  @Field()
  name: string;

  @Field(type => [TeamMembership])
  memberships?: TeamMembership[];

  @Field(type => [Project])
  projects?: Project[];

  @Field(type => [Invite])
  invites?: Invite[];
}
