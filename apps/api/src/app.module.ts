import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { MercuriusModule } from 'nestjs-mercurius';

import { PrismaService } from './services/prisma/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

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
  ],
  providers: [PrismaService],
})
export class AppModule {}
