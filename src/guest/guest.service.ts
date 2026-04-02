import { Injectable } from '@nestjs/common';
import { GuestInterface } from 'src/interface/guest.inerface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GuestService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllGuests() {
    return await this.prisma.guest.findMany();
  }

  async createGuest(data: GuestInterface) {
    return this.prisma.guest.create({
      data,
    });
  }
}
