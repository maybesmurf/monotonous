import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ProjectsResolver } from './projects.resolver';

@Module({
  providers: [PrismaService, ProjectsResolver],
})
export class ProjectsModule {}
