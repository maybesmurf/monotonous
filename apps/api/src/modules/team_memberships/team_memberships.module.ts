import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { TeamMembershipsResolver } from './team_memberships.resolver';

@Module({
  providers: [PrismaService, TeamMembershipsResolver],
})
export class TeamMembershipsModule {}
