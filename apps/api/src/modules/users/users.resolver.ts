import { Request, UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { User } from 'src/modules/users/users.model';
import { AuthGuard } from '@nestjs/passport';
import { FastifyRequest } from 'fastify';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CurrentUser } from '../auth/current_user.decorator';

@Resolver(type => User)
export class UsersResolver {
  constructor(private prisma: PrismaService) {}

  @Query(type => User)
  @UseGuards(JwtAuthGuard)
  async me(@CurrentUser() user: User) {
    return user;
  }

  // @Mutation(returns => User)
  // async createUser(
  //   @Args('input')
  //   { email, firstName, lastName }: CreateUserInput,
  // ) {

  //   return this.prisma.user.create({
  //     data: {
  //       email,
  //       profile: {
  //         create: { firstName, lastName },
  //       },
  //     },
  //   });
  // }

  // @Query(returns => User)
  // async user(@Args('id') id: string) {
  //   const user = this.prisma.user.findUnique({
  //     where: { id },
  //   });

  //   if (!user) {
  //     throw new NotFoundException('No user found');
  //   }

  //   return user;
  // }
}
