import {
  IsString,
  IsNumber,
  IsPositive,
  IsNumberString,
  IsNotEmpty,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class EditShirtDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id: number;

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
  shoulder: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  sleeve: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  sleeveRing: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  armpit: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  chest: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  collar: number;

  @ApiProperty()
  @IsNumberString()
  phone: string;
}
