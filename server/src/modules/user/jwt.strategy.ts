import { Injectable, NotFoundException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserObj } from 'src/types/currentUser.type';
import { UserService } from './user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'fjioDFJIu489#4354',
    });
  }

  async validate(payload: UserObj) {
    const user = await this.userService.findOne(payload.userId);

    if (!user) {
      throw new NotFoundException('Could not found the user');
    }

    return user;
  }
}
