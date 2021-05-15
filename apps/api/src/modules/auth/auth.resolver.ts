import {
  BadRequestException,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../users/users.model';
import { LocalAuthGuard } from './guards/local.guard';
import { AuthService } from './auth.service';
import { CurrentUser } from './current_user.decorator';
import { RegisterInput } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { config } from '@monotonous/conf';
import { CustomContext } from 'src/context';
import { validate } from 'class-validator';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly auth: AuthService,
    private readonly jwt: JwtService,
  ) {}

  @Mutation(type => User)
  async register(@Args('input') input: RegisterInput) {
    await validate(input);
    return this.auth.registerUser(input);
  }

  @Mutation(type => User)
  @UseGuards(LocalAuthGuard)
  async login(
    @Args('email') _email: string,
    @Args('password') _password: string,
    @CurrentUser() user: User,
    @Context() { reply }: CustomContext,
  ) {
    const token = this.jwt.sign({ userId: user.id });

    reply.setCookie(config.auth.cookiePrefix, token, {
      httpOnly: true,
      expires: new Date(config.auth.expires),
    });

    return user;
  }
}
