import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  async list(page: number) {
    const [list, max] = await this.repository.findAndCount({
      take: ITEMS_PER_PAGE,
      skip: ITEMS_PER_PAGE * (page - 1),
    });

    return {
      list,
      max: Math.ceil(max / ITEMS_PER_PAGE),
    };
  }
}
