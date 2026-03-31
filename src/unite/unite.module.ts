import { Module } from '@nestjs/common';
import { UniteController } from './unite.controller';
import { UniteService } from './unite.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UniteController],
  providers: [UniteService, PrismaService],
})
export class UniteModule {}
