import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LoginEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
