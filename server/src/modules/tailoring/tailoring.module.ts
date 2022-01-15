import { Module } from '@nestjs/common';
import { PantsModule } from './pants/pants.module';
import { ShirtModule } from './shirt/shirt.module';
import { TailoringController } from './tailoring.controller';
import { TailoringService } from './tailoring.service';

@Module({
  imports: [PantsModule, ShirtModule],
  controllers: [TailoringController],
  providers: [TailoringService],
})
export class TailoringModule {}
