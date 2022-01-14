import { BadRequestException, Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { LoginDto } from './dtos/login.dto';
import { SignupDto } from './dtos/signup.dto';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async signup(body: SignupDto) {
    const { name, email, password } = body;

    const users = await this.userService.find(email);

    if (users.length) {
      throw new BadRequestException('email in use');
    }

    const hashedPassword = await hash(password, 12);

    return this.userService.create({
      name,
      email,
      password: hashedPassword,
    });
  }

  async login(body: LoginDto) {
    const { email, password } = body;

    const [user] = await this.userService.find(email);

    if (!user) {
      throw new BadRequestException('wrong email');
    }

    const isPasswordOk = await compare(password, user.password);

    if (!isPasswordOk) {
      throw new BadRequestException('wrong password');
    }

    const accessToken = this.jwtService.sign({ userId: user.id });

    return {
      accessToken,
      expire: this.configService.get<string>('JWT_EXPIRATION'),
    };
  }
}
