import { Body, Controller, Post } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize-interceptor';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { SignupDto } from './dtos/signup.dto';
import { UserDto } from './dtos/user.dto';
import { ApiTags, ApiBody } from '@nestjs/swagger';

@Controller('user')
@Serialize(UserDto)
export class UserController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  @ApiTags('authentication')
  @ApiBody({ type: SignupDto })
  signup(@Body() body: SignupDto) {
    return this.authService.signup(body);
  }

  @Post('/login')
  @ApiTags('authentication')
  @ApiBody({ type: LoginDto })
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }
}
