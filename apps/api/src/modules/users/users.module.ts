import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [PrismaService, UsersResolver],
})
export class UsersModule {}
