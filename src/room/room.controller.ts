import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { createRoomDto } from 'src/dto/create-room.dto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}
  @Get('/all')
  getAllRooms() {
    return this.roomService.getAllRooms();
  }

  @Post('/add')
  createRoom(@Body() createRoomDto: createRoomDto) {
    return this.roomService.createRoom(createRoomDto);
  }
  @Put('/update/:number')
  updateRoom(
    @Param('number') number: string,
    @Body() createRoomDto: createRoomDto,
  ) {
    return this.roomService.updateRoom(+number, createRoomDto);
  }
  @Delete('/delete/:number')
  deleteRoom(@Param('number') number: string) {
    return this.roomService.deleteRoom(+number);
  }
}
