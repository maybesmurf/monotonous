import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { config } from '@monotonous/conf';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: extractJwt,
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
  }

  async validate(payload: { userId: string }) {
    return this.prisma.user.findFirst({
      where: { id: payload.userId },
    });
  }
}

function extractJwt(req: FastifyRequest) {
  return req.cookies[config.auth.cookiePrefix];
}
