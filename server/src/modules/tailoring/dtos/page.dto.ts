import { Type } from 'class-transformer';
import { IsOptional, IsString, Min } from 'class-validator';

export class PageDto {
  @Type(() => Number)
  @Min(1)
  page: number;

  @IsString()
  query: string;
}
