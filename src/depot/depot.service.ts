import { BadRequestException, Injectable } from '@nestjs/common';
import { DepotInterface } from 'src/interface/depot.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DepotService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllDepot() {
    return await this.prisma.depot.findMany();
  }

  async updateDepot(id: number, data: DepotInterface) {
    const depotExist = await this.prisma.depot.findUnique({
      where: { id },
    });
    if (!depotExist) {
      throw new BadRequestException("Ce depot n'exists pas");
    }
    return this.prisma.depot.update({
      where: { id },
      data: {
        name: data.name,
      },
    });
  }
  async createDepot(data: DepotInterface) {
    const depotExist = await this.prisma.depot.findUnique({
      where: { name: data.name },
    });
    if (depotExist) {
      throw new BadRequestException('Ce Depot exist déja');
    }
    return this.prisma.depot.create({
      data,
    });
  }

  async deleteDepot(id: number) {
    const depotExist = await this.prisma.depot.findUnique({
      where: { id },
    });
    if (!depotExist) {
      throw new BadRequestException("Cette Room n'exists pas");
    }
    return this.prisma.depot.delete({
      where: { id },
    });
  }
}
