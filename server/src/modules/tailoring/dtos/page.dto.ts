import { Type } from 'class-transformer';
import { Min } from 'class-validator';

export class PageDto {
  @Type(() => Number)
  @Min(1)
  page: number;
}
