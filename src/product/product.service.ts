import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductInterface } from 'src/interface/product.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllProducts() {
    return await this.prisma.product.findMany({
      include: {
        productPrices: {
          include: {
            fournisseur: true,
          },
        },
        unite: true,
        categorie: true,
      },
    });
  }

  async updateProduct(id: number, data: ProductInterface) {
    const productExist = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!productExist) {
      throw new BadRequestException("Ce produit n'exists pas");
    }
    return this.prisma.product.update({
      where: { id },
      data: {
        name: data.name,
      },
    });
  }
  async createProduct(data: ProductInterface) {
    const productExist = await this.prisma.product.findUnique({
      where: {
        name: data.name,
        quantity: data.quantity,
        categoryId: data.categoryId,
        uniteId: data.uniteId,
      },
    });
    if (productExist) {
      throw new BadRequestException('Ce produit exist déja');
    }
    return this.prisma.product.create({
      data,
    });
  }

  async deleteProduct(id: number) {
    const productExist = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!productExist) {
      throw new BadRequestException("Ce produit n'exists pas");
    }
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
