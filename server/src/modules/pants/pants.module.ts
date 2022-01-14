import { Module } from '@nestjs/common';
import { PantsController } from './pants.controller';
import { PantsService } from './pants.service';

@Module({
  controllers: [PantsController],
  providers: [PantsService]
})
export class PantsModule {}
