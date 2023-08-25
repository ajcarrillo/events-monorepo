import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CongressService } from './congress.service';
import { Auth } from '../auth/decorators/auth.decorator';
import { CreateCongressDto, UpdateCongressDto } from './dto';
import { Congress } from './entities/congress.entity';

@Controller('congresos')
@Auth()
export class CongressController {
  constructor(private readonly congressService: CongressService) {}

  @Post()
  async create(
    @Body() createCongressDto: CreateCongressDto,
  ): Promise<Congress> {
    return this.congressService.create(createCongressDto);
  }

  @Get()
  async findAll(): Promise<Congress[]> {
    return this.congressService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Congress> {
    return await this.congressService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCongressDto: UpdateCongressDto,
  ): Promise<Congress> {
    return this.congressService.update(id, updateCongressDto);
  }
}
