import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { hash, verify } from 'argon2';
import { User } from '../schema/types/user.type';
import { RegisterInput } from '../schema/input_types/register.input';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Those credentials dont work');
    }

    return (await verify(user.passwordHash, password)) ? user : null;
  }

  async registerUser(input: RegisterInput) {
    return this.prisma.user.create({
      data: {
        email: input.email,
        passwordHash: await hash(input.password),
        profile: {
          create: {
            firstName: input.firstName,
            lastName: input.lastName,
          },
        },
      },
    });
  }
}
