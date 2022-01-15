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
import { CreatePantsDto } from './dtos/create-pants.dto';
import { EditPantsDto } from './dtos/edit-pants.dto';
import { IdDto } from '../dtos/id.dto';
import { PageDto } from '../dtos/page.dto';
import { PantsListDto } from './dtos/pants-list.dto';
import { PantsDto } from './dtos/pants.dto';
import { PantsService } from './pants.service';
import { ApiTags, ApiBody, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';

@Controller('pants')
@UseGuards(JwtAuthGuard)
export class PantsController {
  constructor(private readonly pantsService: PantsService) {}

  @Post('/create')
  @Serialize(PantsDto)
  @ApiBearerAuth()
  @ApiTags('pants')
  @ApiBody({ type: CreatePantsDto })
  create(@Body() body: CreatePantsDto) {
    return this.pantsService.create(body);
  }

  @Patch('/edit')
  @Serialize(PantsDto)
  @ApiBearerAuth()
  @ApiTags('pants')
  @ApiBody({ type: EditPantsDto })
  edit(@Body() body: EditPantsDto) {
    return this.pantsService.edit(body);
  }

  @Get('/list')
  @Serialize(PantsListDto)
  @ApiBearerAuth()
  @ApiTags('pants')
  @ApiQuery({ name: 'page' })
  list(@Query(ValidationPipe) query: PageDto) {
    return this.pantsService.list(query.page);
  }

  @Get('/details')
  @Serialize(PantsDto)
  @ApiBearerAuth()
  @ApiTags('pants')
  @ApiQuery({ name: 'id' })
  details(@Query(ValidationPipe) query: IdDto) {
    return this.pantsService.findOne(parseInt(query.id));
  }
}
