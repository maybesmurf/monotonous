import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Parent } from '@nestjs/graphql';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { User } from 'src/modules/users/users.model';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CurrentUser } from '../auth/current_user.decorator';
import { LoaderQuery, ResolveLoader } from 'nestjs-mercurius';
import { UserProfile } from '../user_profiles/user_profiles.model';

@Resolver(type => User)
export class UsersResolver {
  constructor(private prisma: PrismaService) {}

  @Query(type => User)
  @UseGuards(JwtAuthGuard)
  async me(@CurrentUser() user: User) {
    return user;
  }

  @ResolveLoader(returns => UserProfile)
  async profile(@Parent() queries: LoaderQuery<User>[]) {
    const profiles = await this.prisma.userProfile.findMany({
      where: {
        userId: { in: queries.map(q => q.obj.id) },
      },
    });

    const lookup = profiles.reduce((acc, p) => {
      acc[p.userId] = p;
      return acc;
    }, {});

    return queries.map(q => lookup[q.obj.id]);
  }
}
