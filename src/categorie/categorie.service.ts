import { BadRequestException, Injectable } from '@nestjs/common';
import { CategoryInterface } from 'src/interface/category.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategorieService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllCategories() {
    return await this.prisma.category.findMany();
  }

  async updateCategorie(id: number, data: CategoryInterface) {
    const categoryExist = await this.prisma.category.findUnique({
      where: { id },
    });
    if (!categoryExist) {
      throw new BadRequestException("Cette Category n'exists pas");
    }
    return this.prisma.category.update({
      where: { id },
      data: {
        name: data.name,
      },
    });
  }
  async createCategory(data: CategoryInterface) {
    const categoryExist = await this.prisma.category.findUnique({
      where: { name: data.name },
    });
    if (categoryExist) {
      throw new BadRequestException('Cette Category exist déja');
    }
    return this.prisma.category.create({
      data,
    });
  }

  async deleteCategory(id: number) {
    const categoryExist = await this.prisma.category.findUnique({
      where: { id },
    });
    if (!categoryExist) {
      throw new BadRequestException("Cette Category n'exists pas");
    }
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
