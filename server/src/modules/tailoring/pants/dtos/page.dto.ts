import { IsNumberString } from 'class-validator';

export class PageDto {
  @IsNumberString()
  page: string;
}
