import { Controller, Get } from '@nestjs/common';
import { GuestService } from './guest.service';

@Controller('guest')
export class GuestController {
  constructor(private readonly GuestService: GuestService) {}
  @Get('all')
  getAllGuests() {
    return this.GuestService.getAllGuests();
  }
}
