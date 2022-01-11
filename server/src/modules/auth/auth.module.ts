import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginEntity } from './login.entity';
import { SignupEntity } from './signup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SignupEntity, LoginEntity])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
