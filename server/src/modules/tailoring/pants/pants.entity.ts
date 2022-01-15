import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Pants {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  height: number;

  @Column()
  waist: number;

  @Column()
  seat: number;

  @Column()
  thight: number;

  @Column()
  knee: number;

  @Column()
  pantSlipper: number;

  @Column()
  hip: number;

  @Column()
  phone: string;
}
