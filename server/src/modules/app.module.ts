import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PantsModule } from './pants/pants.module';
import { ShirtModule } from './shirt/shirt.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from 'src/filters/http-exception.filter';
import { ConfigModule, ConfigService } from '@nestjs/config';

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
          entities: [User],
          synchronize: true,
        };
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    PantsModule,
    ShirtModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
