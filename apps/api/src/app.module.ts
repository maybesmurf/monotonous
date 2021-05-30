import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { MercuriusModule } from 'nestjs-mercurius';
import { registerEnumType } from '@nestjs/graphql';

import { PrismaService } from './services/prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { MemberRoles, NotificationTypes } from '@prisma/client';
import { SchemaModule } from './schema/schema.module';
import { GlobalJwtAuthGuard } from './auth/guards/jwt.guard';
import { emitter } from './schema/emitter';

registerEnumType(MemberRoles, { name: 'MemberRoles' });
registerEnumType(NotificationTypes, { name: 'NotificationTypes' });

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot(),
    MercuriusModule.forRoot({
      autoSchemaFile: '../../schema.graphql',
      sortSchema: true,
      altair: true,
      context: (request, reply) => ({ request, reply }),
      subscription: {
        emitter,
        context: (connection, request) => ({ connection, request }),
      },
    }),
    AuthModule,
    SchemaModule,
  ],
  providers: [GlobalJwtAuthGuard, PrismaService],
})
export class AppModule {}
