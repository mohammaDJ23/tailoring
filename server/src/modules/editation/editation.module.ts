import { Module } from '@nestjs/common';
import { EditationController } from './editation.controller';
import { EditationService } from './editation.service';

@Module({
  controllers: [EditationController],
  providers: [EditationService]
})
export class EditationModule {}
