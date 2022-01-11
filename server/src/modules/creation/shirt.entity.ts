import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShirtEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  height: number;

  @Column()
  shoulder: number;

  @Column()
  sleeve: number;

  @Column()
  sleeveRing: number;

  @Column()
  armpit: number;

  @Column()
  chest: number;

  @Column()
  collar: number;

  @Column()
  phone: string;
}