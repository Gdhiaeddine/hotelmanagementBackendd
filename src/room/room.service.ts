import { BadRequestException, Injectable } from '@nestjs/common';
import { RoomInterface } from 'src/interface/room.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllRooms() {
    return await this.prisma.room.findMany();
  }

  async updateRoom(number: number, data: RoomInterface) {
    const roomExist = await this.prisma.room.findUnique({
      where: { number },
    });
    if (!roomExist) {
      throw new BadRequestException("Cette Room n'exists pas");
    }
    return this.prisma.room.update({
      where: { number },
      data: {
        floor: data.floor,
        type: data.type,
        price: data.price,
        status: data.status,
      },
    });
  }
  async createRoom(data: RoomInterface) {
    const roomExist = await this.prisma.room.findUnique({
      where: { number: data.number },
    });
    if (roomExist) {
      throw new BadRequestException('Cette Room exist déja');
    }
    return this.prisma.room.create({
      data,
    });
  }

  async deleteRoom(number: number) {
    const roomExist = await this.prisma.room.findUnique({
      where: { number },
    });
    if (!roomExist) {
      throw new BadRequestException("Cette Room n'exists pas");
    }
    return this.prisma.room.delete({
      where: { number },
    });
  }
}
