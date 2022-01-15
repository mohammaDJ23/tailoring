import {
  IsString,
  IsNumber,
  IsPositive,
  IsNumberString,
} from 'class-validator';

export class CreateShirtDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  height: number;

  @IsNumber()
  @IsPositive()
  shoulder: number;

  @IsNumber()
  @IsPositive()
  sleeve: number;

  @IsNumber()
  @IsPositive()
  sleeveRing: number;

  @IsNumber()
  @IsPositive()
  armpit: number;

  @IsNumber()
  @IsPositive()
  chest: number;

  @IsNumber()
  @IsPositive()
  collar: number;

  @IsNumberString()
  phone: string;
}
