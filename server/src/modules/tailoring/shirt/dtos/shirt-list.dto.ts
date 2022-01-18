import { Expose, Type } from 'class-transformer';
import { ShirtDto } from './shirt.dto';

export class ShirtListDto {
  @Expose()
  @Type(() => ShirtDto)
  list: ShirtDto[];

  @Expose()
  max: number;
}
