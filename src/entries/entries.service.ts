import { Injectable } from '@nestjs/common';
import { CreateStockEntryDto } from 'src/dto/create-stock-entry.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EntriesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateStockEntryDto) {
    const { fournisseurId, entryDate, items } = data;

    return this.prisma.stockEntry.create({
      data: {
        fournisseurId,
        entryDate: new Date(entryDate),
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        fournisseur: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.stockEntry.findMany({
      include: {
        fournisseur: true,
        items: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.stockEntry.findUnique({
      where: { id },
      include: {
        fournisseur: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    return this.prisma.stockEntry.delete({
      where: { id },
    });
  }
}
