import { Exclude, Expose, Type } from 'class-transformer';
import { PantsDto } from './pants.dto';

export class PantsListDto {
  @Expose()
  @Type(() => PantsDto)
  list: PantsDto[];

  @Expose()
  max: number;
}
