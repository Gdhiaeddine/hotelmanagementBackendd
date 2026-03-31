import { Module } from '@nestjs/common';
import { FournisseurController } from './fournisseur.controller';
import { FournisseurService } from './fournisseur.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FournisseurController],
  providers: [FournisseurService, PrismaService],
})
export class FournisseurModule {}
