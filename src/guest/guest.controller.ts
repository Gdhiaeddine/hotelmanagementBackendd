import { Body, Controller, Get, Post } from '@nestjs/common';
import { GuestService } from './guest.service';
import { createGuestDto } from 'src/dto/create-guest.dto';

@Controller('guest')
export class GuestController {
  constructor(private readonly GuestService: GuestService) {}
  @Get('/all')
  getAllGuests() {
    return this.GuestService.getAllGuests();
  }

  @Post('/create')
  createGuest(@Body() createGuestDto: createGuestDto) {
    return this.GuestService.createGuest(createGuestDto);
  }
}
