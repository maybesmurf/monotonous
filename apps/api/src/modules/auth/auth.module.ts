import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'jwtConstants.secret',
      signOptions: { expiresIn: '15d' },
    }),
  ],
  providers: [PrismaService, AuthService, LocalStrategy, AuthResolver],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
