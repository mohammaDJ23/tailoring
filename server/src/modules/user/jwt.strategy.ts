import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserObj } from 'src/shared/types/currentUser.type';
import { UserService } from './user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {
    super(
      (function () {
        return {
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: configService.get<string>('JWT_SECRET_KEY'),
        };
      })(),
    );
  }

  async validate(payload: UserObj) {
    const user = await this.userService.findOne(payload.userId);

    if (!user) {
      throw new NotFoundException('Could not found the user');
    }

    return user;
  }
}
