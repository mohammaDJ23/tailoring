import {
  IsNumber,
  IsNumberString,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreatePantsDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  height: number;

  @IsNumber()
  @IsPositive()
  waist: number;

  @IsNumber()
  @IsPositive()
  seat: number;

  @IsNumber()
  @IsPositive()
  thight: number;

  @IsNumber()
  @IsPositive()
  knee: number;

  @IsNumber()
  @IsPositive()
  pantSlipper: number;

  @IsNumber()
  @IsPositive()
  hip: number;

  @IsNumberString()
  phone: string;
}
