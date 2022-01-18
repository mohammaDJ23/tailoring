import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ITEMS_PER_PAGE } from 'src/shared/constants/list';
import { Like, Repository } from 'typeorm';
import { CreateShirtDto } from './dtos/create-shirt.dto';
import { EditShirtDto } from './dtos/edit-shirt.dto';
import { Shirt } from './shirt.entity';

@Injectable()
export class ShirtService {
  constructor(
    @InjectRepository(Shirt) private readonly repository: Repository<Shirt>,
  ) {}

  find(name: string) {
    return this.repository.find({ name });
  }

  async findOne(id: number) {
    const shirt = await this.repository.findOne(id);

    if (!shirt) {
      throw new NotFoundException('could not found the shirt');
    }

    return shirt;
  }

  async create(body: CreateShirtDto) {
    const [findedShirt] = await this.find(body.name);

    if (findedShirt) {
      throw new BadRequestException('the shirt in use');
    }

    const shirt = this.repository.create(body);

    return this.repository.save(shirt);
  }

  async edit(body: EditShirtDto) {
    const shirt = await this.findOne(body.id);

    Object.assign(shirt, body);

    return this.repository.save(shirt);
  }

  getMax(list: Shirt[], total: number) {
    return !list.length ? 0 : Math.ceil(total / ITEMS_PER_PAGE);
  }

  async list(page: number) {
    const [list, total] = await this.repository.findAndCount({
      take: ITEMS_PER_PAGE,
      skip: ITEMS_PER_PAGE * (page - 1),
      order: { createdAt: 'DESC' },
    });

    return {
      list,
      max: this.getMax(list, total),
    };
  }

  async search(query: string, page: number = 1) {
    const [list, total] = await this.repository.findAndCount({
      take: ITEMS_PER_PAGE,
      skip: ITEMS_PER_PAGE * (page - 1),
      where: { name: Like(`%${query}%`) },
      order: { createdAt: 'DESC' },
    });

    return {
      list,
      max: this.getMax(list, total),
    };
  }
}
