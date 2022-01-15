import { IsInt, IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class EditPantsDto {
  @IsNumber()
  id: number;

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

  @IsString()
  phone: string;
}
