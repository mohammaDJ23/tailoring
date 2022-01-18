import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Pants {
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
  waist: number;

  @ApiProperty()
  @Column()
  seat: number;

  @ApiProperty()
  @Column()
  thight: number;

  @ApiProperty()
  @Column()
  knee: number;

  @ApiProperty()
  @Column()
  pantSlipper: number;

  @ApiProperty()
  @Column()
  hip: number;

  @ApiProperty()
  @Column()
  phone: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
