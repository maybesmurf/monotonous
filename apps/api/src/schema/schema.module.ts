import { Module } from '@nestjs/common';
import { NotificationsService } from 'src/notifications/notifications.service';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { InvitesResolver } from './resolvers/invite.resolver';
import { NotificationsResolver } from './resolvers/notifications.resolver';
import { ProjectsResolver } from './resolvers/projects.resolver';
import { ProjectMembershipsResolver } from './resolvers/project_memberships.resolver';
import { TeamsResolver } from './resolvers/teams.resolver';
import { TeamMembershipsResolver } from './resolvers/team_memberships.resolver';
import { UsersResolver } from './resolvers/users.resolver';
import { UserProfilesResolver } from './resolvers/user_profiles.resolver';

@Module({
  providers: [
    // Services
    PrismaService,
    NotificationsService,
    // Resolvers
    InvitesResolver,
    NotificationsResolver,
    ProjectMembershipsResolver,
    ProjectsResolver,
    TeamMembershipsResolver,
    TeamsResolver,
    UserProfilesResolver,
    UsersResolver,
  ],
})
export class SchemaModule {}
