import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  providers: [PrismaService, UserResolver],
})
export class AccountsModule {}
