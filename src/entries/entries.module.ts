import { Module } from '@nestjs/common';
import { EntriesController } from './entries.controller';
import { EntriesService } from './entries.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EntriesController],
  providers: [EntriesService, PrismaService],
})
export class EntriesModule {}
