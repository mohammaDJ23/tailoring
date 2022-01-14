import { Module } from '@nestjs/common';
import { ShirtController } from './shirt.controller';
import { ShirtService } from './shirt.service';

@Module({
  controllers: [ShirtController],
  providers: [ShirtService]
})
export class ShirtModule {}
