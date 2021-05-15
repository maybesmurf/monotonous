import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { MercuriusModule } from 'nestjs-mercurius';

import { PrismaService } from './services/prisma/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TeamsModule } from './modules/teams/teams.module';
import { TeamMembershipsModule } from './modules/team_memberships/team_memberships.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { ProjectMembershipsModule } from './modules/project_memberships/project_membersips.module';
import { InvitesModule } from './modules/invites/invites.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot(),
    MercuriusModule.forRoot({
      autoSchemaFile: true,
      altair: true,
      context: (request, reply) => {
        return { request, reply };
      },
      subscription: {
        context: (connection, request) => ({}),
      },
    }),
    AuthModule,
    UsersModule,
    TeamsModule,
    TeamMembershipsModule,
    ProjectsModule,
    ProjectMembershipsModule,
    InvitesModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
