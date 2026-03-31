import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReservationService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllReservations() {
    return await this.prisma.reservation.findMany({
      include: {
        guest: true,
        room: true,
      },
    });
  }
}
