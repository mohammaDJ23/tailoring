import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { Serialize } from 'src/interceptors/serialize-interceptor';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { LoginDto } from './dtos/login.dto';
import { SignupDto } from './dtos/signup.dto';
import { UserDto } from './dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  @Serialize(UserDto)
  signup(@Body() body: SignupDto) {
    return this.authService.signup(body);
  }

  @Post('/login')
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @Serialize(UserDto)
  getUser(@CurrentUser() user) {
    return user;
  }
}
