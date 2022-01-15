import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from 'src/filters/http-exception.filter';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Pants } from './tailoring/pants/pants.entity';
import { Shirt } from './tailoring/shirt/shirt.entity';
import { TailoringModule } from './tailoring/tailoring.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],

      useFactory: function (config: ConfigService) {
        return {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: config.get<string>('DATABASE_PASSWORD'),
          database: 'postgres',
          entities: [User, Pants, Shirt],
          synchronize: true,
        };
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    UserModule,
    TailoringModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
