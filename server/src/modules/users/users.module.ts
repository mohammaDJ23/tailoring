import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DetailsModule } from './details/details.module';
import { ListsModule } from './lists/lists.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [DetailsModule, ListsModule]
})
export class UsersModule {}
