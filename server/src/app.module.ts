import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './auth/auth.module';
import { CreationModule } from './modules/creation/creation.module';
import { EditationModule } from './modules/editation/editation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configuration';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    AuthModule,
    CreationModule,
    EditationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
