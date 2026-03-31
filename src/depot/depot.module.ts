import { Module } from '@nestjs/common';
import { DepotController } from './depot.controller';
import { DepotService } from './depot.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DepotController],
  providers: [DepotService, PrismaService],
})
export class DepotModule {}
