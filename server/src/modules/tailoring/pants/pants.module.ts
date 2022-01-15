import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PantsController } from './pants.controller';
import { Pants } from './pants.entity';
import { PantsService } from './pants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pants])],
  controllers: [PantsController],
  providers: [PantsService],
})
export class PantsModule {}
