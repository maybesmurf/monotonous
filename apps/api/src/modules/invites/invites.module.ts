import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { InvitesResolver } from './invites.resolver';

@Module({
  providers: [PrismaService, InvitesResolver],
})
export class InvitesModule {}
