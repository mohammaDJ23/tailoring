import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignupDto } from './dtos/signup.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  find(email: string) {
    return this.repository.find({ email });
  }

  findOne(id: number) {
    if (!id) {
      throw new NotFoundException();
    }

    return this.repository.findOne(id);
  }

  create(body: SignupDto) {
    const user = this.repository.create(body);

    return this.repository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException();
    }

    return this.repository.remove(user);
  }
}
