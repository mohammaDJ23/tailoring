import { Expose } from 'class-transformer';

export class ShirtDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  height: number;

  @Expose()
  shoulder: number;

  @Expose()
  sleeve: number;

  @Expose()
  sleeveRing: number;

  @Expose()
  armpit: number;

  @Expose()
  chest: number;

  @Expose()
  collar: number;

  @Expose()
  phone: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
