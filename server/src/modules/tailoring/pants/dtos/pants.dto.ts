import { Expose } from 'class-transformer';

export class PantsDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  height: number;

  @Expose()
  waist: number;

  @Expose()
  seat: number;

  @Expose()
  thight: number;

  @Expose()
  knee: number;

  @Expose()
  pantSlipper: number;

  @Expose()
  hip: number;

  @Expose()
  phone: string;
}
