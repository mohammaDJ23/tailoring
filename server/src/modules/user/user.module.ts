import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      inject: [ConfigService],

      useFactory: function (config: ConfigService) {
        return {
          secret: config.get<string>('JWT_SECRET_KEY'),
          signOptions: { expiresIn: config.get<string>('JWT_EXPIRATION') },
        };
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, AuthService, JwtStrategy],
})
export class UserModule {}
