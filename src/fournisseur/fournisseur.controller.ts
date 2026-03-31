import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FournisseurService } from './fournisseur.service';
import { createFournisseurDto } from 'src/dto/create-fournisseur.dto';

@Controller('fournisseur')
export class FournisseurController {
  constructor(private readonly fournisseurService: FournisseurService) {}
  @Get('/all')
  getAllFournisseurs() {
    return this.fournisseurService.getAllFournisseurs();
  }

  @Post('/add')
  createFournisseur(@Body() createFournisseurDto: createFournisseurDto) {
    return this.fournisseurService.createFournisseur(createFournisseurDto);
  }
  @Put('/update/:id')
  updateFournisseur(
    @Param('id') id: string,
    @Body() createFournisseurDto: createFournisseurDto,
  ) {
    return this.fournisseurService.updateFournisseur(+id, createFournisseurDto);
  }
  @Delete('/delete/:id')
  deleteFournisseur(@Param('id') id: string) {
    return this.fournisseurService.deleteFournisseur(+id);
  }
}
