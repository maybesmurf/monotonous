import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { validate } from 'class-validator';
import { config } from '@monotonous/conf';

import { User } from '../types/user.type';
import { LocalAuthGuard } from '../../auth/guards/local.guard';
import { AuthService } from '../../auth/auth.service';
import { CurrentUser } from '../../auth/decorators/current_user.decorator';
import { RegisterInput } from '../input_types/register.input';
import { CustomContext } from 'src/context';
import { Public } from 'src/auth/decorators/public.decorator';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly auth: AuthService,
    private readonly jwt: JwtService,
  ) {}

  @Mutation(type => User)
  @Public()
  async register(@Args('input') input: RegisterInput): Promise<User> {
    await validate(input);
    return this.auth.registerUser(input);
  }

  @Mutation(type => User)
  @Public()
  @UseGuards(LocalAuthGuard)
  async login(
    @Args('email') _email: string,
    @Args('password') _password: string,
    @CurrentUser() user: User,
    @Context() { reply }: CustomContext,
  ): Promise<User> {
    const token = this.jwt.sign({ userId: user.id });

    reply.setCookie(config.auth.cookiePrefix, token, {
      httpOnly: true,
      expires: new Date(config.auth.expires),
    });

    return user;
  }

  @Mutation(type => User)
  async logout(
    @CurrentUser() user: User,
    @Context() { reply }: CustomContext,
  ): Promise<User> {
    reply.setCookie(config.auth.cookiePrefix, '', {
      httpOnly: true,
      expires: new Date(),
    });

    return user;
  }
}
