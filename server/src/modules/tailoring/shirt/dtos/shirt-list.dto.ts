import { Expose, Type } from 'class-transformer';
import { Shirt } from '../shirt.entity';

export class ShirtListDto {
  @Expose()
  @Type(() => Shirt)
  list: Shirt[];

  @Expose()
  max: number;
}
