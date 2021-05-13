import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { User } from 'src/types/user.model';
import { CreateUserInput } from '../accounts.dto';

@Resolver(type => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  @Mutation(returns => User)
  async createUser(
    @Args('input')
    { email, firstName, lastName }: CreateUserInput,
  ) {
    return this.prisma.user.create({
      data: {
        email,
        profile: {
          create: { firstName, lastName },
        },
      },
    });
  }

  @Query(returns => User)
  async user(@Args('id') id: string) {
    const user = this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('No user found');
    }

    return user;
  }
}
