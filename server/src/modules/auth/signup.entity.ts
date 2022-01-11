import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SignupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
