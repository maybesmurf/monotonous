import { NotificationTypes } from '@prisma/client';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Project } from './project.type';
import { Team } from './team.type';
import { User } from './user.type';

@ObjectType()
export class Notification {
  @Field(type => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  seenAt?: Date | null;

  @Field(type => NotificationTypes)
  type: NotificationTypes;

  /**
   * Relationships
   */

  @Field()
  userId: string;
  @Field(type => User)
  user?: User;

  @Field()
  subjectId: string;
  @Field(type => User)
  subject?: User;

  @Field({ nullable: true })
  teamId: string | null;
  @Field(type => Team, { nullable: true })
  team?: Team | null;

  @Field({ nullable: true })
  projectId: string | null;
  @Field(type => Project, { nullable: true })
  project?: Project | null;
}
