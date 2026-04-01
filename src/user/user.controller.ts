import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from 'src/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UserRole } from 'generated/prisma/enums';
import { JwtService } from '@nestjs/jwt';
import type { Request, Response } from 'express';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}
  @Post('/register')
  async createUser(@Body() createUserDto: createUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 12);
    const user = await this.userService.createUser({
      ...createUserDto,
      role: createUserDto.role as UserRole,
      password: hashedPassword,
    });

    const { password, ...result } = user;

    return result;
  }
  @Post('/login')
  async loginUser(
    @Body() createUserDto: createUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const userExist = await this.userService.findUser(createUserDto.username);
    if (!userExist) throw new BadRequestException('Invalid Credentials');
    if (!(await bcrypt.compare(createUserDto.password, userExist.password)))
      return new BadRequestException('Invalid Credentials');
    const payload = { sub: userExist.id, username: userExist.username };
    const jwt = await this.jwtService.signAsync(payload);
    response.cookie('jwt', jwt, { httpOnly: true });
    return {
      message: 'Connection Succecced',
    };
  }

  @Get('/get')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie);
      if (!data) throw new UnauthorizedException();
      const user = await this.userService.findUser(data['username']);
      if (!user) throw new UnauthorizedException();
      const { password, ...result } = user;
      return result;
    } catch {
      throw new UnauthorizedException();
    }
  }
  @Post('/logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');
    return {
      message: 'Logout Success',
    };
  }
}
