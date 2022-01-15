import {
  IsNumber,
  IsNumberString,
  IsPositive,
  IsString,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreatePantsDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  height: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  waist: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  seat: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  thight: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  knee: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  pantSlipper: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  hip: number;

  @ApiProperty()
  @IsNumberString()
  phone: string;
}
