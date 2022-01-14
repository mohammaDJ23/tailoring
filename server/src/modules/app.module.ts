import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PantsModule } from './pants/pants.module';
import { ShirtModule } from './shirt/shirt.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'JIfO*#f8992dsFOsoFJ',
      database: 'postgres',
      entities: [User],
      synchronize: true,
    }),
    PantsModule,
    ShirtModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
