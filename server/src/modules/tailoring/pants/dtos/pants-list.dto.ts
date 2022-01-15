import { Expose, Type } from 'class-transformer';
import { Pants } from '../pants.entity';

export class PantsListDto {
  @Expose()
  @Type(() => Pants)
  list: Pants[];

  @Expose()
  max: number;
}
