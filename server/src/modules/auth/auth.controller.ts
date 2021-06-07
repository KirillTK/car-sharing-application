import { Controller, Body, Post, UseGuards, Request, Get } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
import { DoesUserExist } from '../../core/guards/doesUserExist.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.body.user);
  }

  @UseGuards(DoesUserExist)
  @Post('signup')
  async signUp(@Body() user: UserDto) {
    return await this.authService.create(user);
  }

  @Get('current')
  async getAllUserCountries(@Request() request) {
    return await this.authService.getCurrentUser(request.headers.authorization);
  }
}
