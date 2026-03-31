import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { EntriesService } from './entries.service';
import { CreateStockEntryDto } from 'src/dto/create-stock-entry.dto';

@Controller('entries')
export class EntriesController {
  constructor(private readonly stockEntryService: EntriesService) {}

  @Post()
  create(@Body() dto: CreateStockEntryDto) {
    return this.stockEntryService.create(dto);
  }

  @Get()
  findAll() {
    return this.stockEntryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.stockEntryService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.stockEntryService.remove(id);
  }
}
