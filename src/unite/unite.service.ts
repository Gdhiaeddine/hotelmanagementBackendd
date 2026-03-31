import { BadRequestException, Injectable } from '@nestjs/common';
import { UniteInterface } from 'src/interface/unite.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UniteService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllUnites() {
    return await this.prisma.unite.findMany();
  }

  async updateUnite(id: number, data: UniteInterface) {
    const uniteExist = await this.prisma.unite.findUnique({
      where: { id },
    });
    if (!uniteExist) {
      throw new BadRequestException("Cette Unite n'exists pas");
    }
    return this.prisma.unite.update({
      where: { id },
      data: {
        name: data.name,
      },
    });
  }
  async createUnite(data: UniteInterface) {
    const uniteExist = await this.prisma.unite.findUnique({
      where: { name: data.name },
    });
    if (uniteExist) {
      throw new BadRequestException('Cette Unite exist déja');
    }
    return this.prisma.unite.create({
      data,
    });
  }

  async deleteUnite(id: number) {
    const uniteExist = await this.prisma.unite.findUnique({
      where: { id },
    });
    if (!uniteExist) {
      throw new BadRequestException("Cette Unite n'exists pas");
    }
    return this.prisma.unite.delete({
      where: { id },
    });
  }
}
