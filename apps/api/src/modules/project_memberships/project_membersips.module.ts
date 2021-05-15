import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ProjectMembershipsResolver } from './project_memberships.resolver';

@Module({
  providers: [PrismaService, ProjectMembershipsResolver],
})
export class ProjectMembershipsModule {}
