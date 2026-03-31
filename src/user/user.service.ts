import { BadRequestException, Injectable } from '@nestjs/common';
import { UserInterface } from 'src/interface/user.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: UserInterface) {
    const userExist = await this.prisma.user.findUnique({
      where: { username: data.username },
    });
    if (userExist) {
      throw new BadRequestException('Cette Utilisateur exist déja');
    }
    return this.prisma.user.create({
      data,
    });
  }
  async findUser(username: string) {
    return this.prisma.user.findUnique({ where: { username: username } });
  }
}
