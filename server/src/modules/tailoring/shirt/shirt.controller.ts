import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { Serialize } from 'src/interceptors/serialize-interceptor';
import { IdDto } from '../dtos/id.dto';
import { PageDto } from '../dtos/page.dto';
import { CreateShirtDto } from './dtos/create-shirt.dto';
import { EditShirtDto } from './dtos/edit-shirt.dto';
import { ShirtListDto } from './dtos/shirt-list.dto';
import { ShirtDto } from './dtos/shirt.dto';
import { ShirtService } from './shirt.service';
import {
  ApiTags,
  ApiBody,
  ApiQuery,
  ApiBearerAuth,
  ApiResponse,
} from '@nestjs/swagger';
import { Shirt } from './shirt.entity';

@Controller('shirt')
@UseGuards(JwtAuthGuard)
export class ShirtController {
  constructor(private readonly shirtService: ShirtService) {}

  @Post('/create')
  @Serialize(ShirtDto)
  @ApiBearerAuth()
  @ApiTags('shirt')
  @ApiBody({ type: CreateShirtDto })
  @ApiResponse({ type: Shirt })
  create(@Body() body: CreateShirtDto) {
    return this.shirtService.create(body);
  }

  @Patch('/edit')
  @Serialize(ShirtDto)
  @ApiBearerAuth()
  @ApiTags('shirt')
  @ApiBody({ type: EditShirtDto })
  @ApiResponse({ type: Shirt })
  edit(@Body() body: EditShirtDto) {
    return this.shirtService.edit(body);
  }

  @Get('/list')
  @Serialize(ShirtListDto)
  @ApiBearerAuth()
  @ApiTags('shirt')
  @ApiQuery({ name: 'page' })
  @ApiResponse({ type: ShirtListDto })
  list(@Query(ValidationPipe) query: PageDto) {
    return this.shirtService.list(query.page);
  }

  @Get('/details')
  @Serialize(ShirtDto)
  @ApiBearerAuth()
  @ApiTags('shirt')
  @ApiQuery({ name: 'id' })
  @ApiResponse({ type: Shirt })
  details(@Query(ValidationPipe) query: IdDto) {
    return this.shirtService.findOne(parseInt(query.id));
  }
}
