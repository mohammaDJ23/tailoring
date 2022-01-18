import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Shirt {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  height: number;

  @ApiProperty()
  @Column()
  shoulder: number;

  @ApiProperty()
  @Column()
  sleeve: number;

  @ApiProperty()
  @Column()
  sleeveRing: number;

  @ApiProperty()
  @Column()
  armpit: number;

  @ApiProperty()
  @Column()
  chest: number;

  @ApiProperty()
  @Column()
  collar: number;

  @ApiProperty()
  @Column()
  phone: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updateAt: Date;
}
