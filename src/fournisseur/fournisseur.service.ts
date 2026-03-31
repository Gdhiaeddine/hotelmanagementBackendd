import { BadRequestException, Injectable } from '@nestjs/common';
import { FournisseurInterface } from 'src/interface/fournisseur.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FournisseurService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllFournisseurs() {
    return await this.prisma.fournisseur.findMany();
  }

  async updateFournisseur(id: number, data: FournisseurInterface) {
    const fournisseurExist = await this.prisma.fournisseur.findUnique({
      where: { id },
    });
    if (!fournisseurExist) {
      throw new BadRequestException("Ce depot n'exists pas");
    }
    return this.prisma.fournisseur.update({
      where: { id },
      data: {
        name: data.name,
        adress: data.adress,
        zipCode: data.zipCode,
        ville: data.ville,
        telephone: data.telephone,
      },
    });
  }
  async createFournisseur(data: FournisseurInterface) {
    const fournisseurExist = await this.prisma.fournisseur.findUnique({
      where: { name: data.name },
    });
    if (fournisseurExist) {
      throw new BadRequestException('Ce Fournisseur exist déja');
    }
    return this.prisma.fournisseur.create({
      data,
    });
  }

  async deleteFournisseur(id: number) {
    const fournisseurExist = await this.prisma.fournisseur.findUnique({
      where: { id },
    });
    if (!fournisseurExist) {
      throw new BadRequestException("Cette Fournisseur n'exists pas");
    }
    return this.prisma.fournisseur.delete({
      where: { id },
    });
  }
}
