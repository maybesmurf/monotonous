import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { User } from 'src/schema/types/user.type';
import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
import { CurrentUser } from '../../auth/decorators/current_user.decorator';
import { UsersLoader } from '../loaders/users.loader';

@Resolver(type => User)
export class UsersResolver extends UsersLoader {
  @Query(type => User)
  @UseGuards(JwtAuthGuard)
  async me(@CurrentUser() user: User) {
    return user;
  }
}
