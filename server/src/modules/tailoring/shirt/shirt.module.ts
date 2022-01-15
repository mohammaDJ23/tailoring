import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShirtController } from './shirt.controller';
import { Shirt } from './shirt.entity';
import { ShirtService } from './shirt.service';

@Module({
  imports: [TypeOrmModule.forFeature([Shirt])],
  controllers: [ShirtController],
  providers: [ShirtService],
})
export class ShirtModule {}
