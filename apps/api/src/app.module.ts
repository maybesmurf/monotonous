import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { MercuriusModule } from 'nestjs-mercurius';

import { PrismaService } from './services/prisma/prisma.service';
import { AccountsModule } from './modules/accounts/accounts.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot(),
    MercuriusModule.forRoot({
      autoSchemaFile: true,
      altair: true,
      context: (request, reply) => ({}),
      subscription: {
        context: (connection, request) => ({}),
      },
    }),
    AccountsModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
