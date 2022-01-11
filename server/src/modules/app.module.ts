import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CreationModule } from './creation/creation.module';
import { EditationModule } from './editation/editation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignupEntity } from './auth/signup.entity';
import { LoginEntity } from './auth/login.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'JIfO*#f8992dsFOsoFJ',
      database: 'postgres',
      entities: [SignupEntity, LoginEntity],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    CreationModule,
    EditationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
