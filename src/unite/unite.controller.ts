import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { UniteService } from './unite.service';
import { createUniteDto } from 'src/dto/create-unite.dto';

@Controller('unite')
export class UniteController {
  constructor(private readonly uniteService: UniteService) {}
  @Get('/all')
  getAllUnites() {
    return this.uniteService.getAllUnites();
  }

  @Post('/add')
  createUnite(@Body() createUniteDto: createUniteDto) {
    return this.uniteService.createUnite(createUniteDto);
  }
  @Put('/update/:id')
  updateUnite(@Param('id') id: string, @Body() createUniteDto: createUniteDto) {
    return this.uniteService.updateUnite(+id, createUniteDto);
  }
  @Delete('/delete/:id')
  deleteUnite(@Param('id') id: string) {
    return this.uniteService.deleteUnite(+id);
  }
}
