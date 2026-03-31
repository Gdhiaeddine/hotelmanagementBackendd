import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DepotService } from './depot.service';
import { createDepotDto } from 'src/dto/create-depot.dto';

@Controller('depot')
export class DepotController {
  constructor(private readonly depotService: DepotService) {}
  @Get('/all')
  getAllDepot() {
    return this.depotService.getAllDepot();
  }

  @Post('/add')
  createDepot(@Body() createDepotDto: createDepotDto) {
    return this.depotService.createDepot(createDepotDto);
  }
  @Put('/update/:id')
  updateDepot(@Param('id') id: string, @Body() createDepotDto: createDepotDto) {
    return this.depotService.updateDepot(+id, createDepotDto);
  }
  @Delete('/delete/:id')
  deleteDepot(@Param('id') id: string) {
    return this.depotService.deleteDepot(+id);
  }
}
