import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Invite } from './invite.type';
import { Project } from './project.type';
import { TeamMembership } from './team_membership.type';

@ObjectType()
export class Team {
  @Field(type => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  name: string;

  @Field(type => [TeamMembership])
  memberships?: TeamMembership[];

  @Field(type => [Project])
  projects?: Project[];

  @Field(type => [Invite])
  invites?: Invite[];
}
