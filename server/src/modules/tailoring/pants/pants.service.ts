import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreatePantsDto } from './dtos/create-pants.dto';
import { EditPantsDto } from './dtos/edit-pants.dto';
import { Pants } from './pants.entity';
import { ITEMS_PER_PAGE } from 'src/shared/constants/list';

@Injectable()
export class PantsService {
  constructor(
    @InjectRepository(Pants) private readonly repository: Repository<Pants>,
  ) {}

  find(name: string) {
    return this.repository.find({ name });
  }

  async findOne(id: number) {
    const pants = await this.repository.findOne(id);

    if (!pants) {
      throw new NotFoundException('could not found the pant');
    }

    return pants;
  }

  async create(body: CreatePantsDto) {
    const [findedPants] = await this.find(body.name);

    if (findedPants) {
      throw new BadRequestException('the pant in use');
    }

    const pants = this.repository.create(body);

    return this.repository.save(pants);
  }

  async edit(body: EditPantsDto) {
    const pants = await this.findOne(body.id);

    Object.assign(pants, body);

    return this.repository.save(pants);
  }

  getMax(list: Pants[], total: number) {
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
