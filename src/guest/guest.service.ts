import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GuestService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllGuests() {
    return await this.prisma.guest.findMany();
  }
}
