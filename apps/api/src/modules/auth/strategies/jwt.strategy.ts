import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { config } from '@monotonous/conf';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: extractJwt,
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
  }

  async validate(payload: { userId: string }) {
    return { userId: payload.userId };
  }
}

function extractJwt(req: FastifyRequest) {
  return req.cookies[config.auth.cookiePrefix];
}
