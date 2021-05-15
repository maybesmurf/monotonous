import { PrismaClient } from '.prisma/client';
import { Module } from '@nestjs/common';
import { TeamsResolver } from './teams.resolver';

@Module({
  providers: [PrismaClient, TeamsResolver],
})
export class TeamsModule {}
