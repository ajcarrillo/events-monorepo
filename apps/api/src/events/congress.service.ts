import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Congress } from './entities/congress.entity';
import { Repository } from 'typeorm';
import { CreateCongressDto, UpdateCongressDto } from './dto';

@Injectable()
export class CongressService {
  constructor(
    @InjectRepository(Congress)
    private readonly congressRepository: Repository<Congress>,
  ) {}

  async create(createCongressDto: CreateCongressDto): Promise<Congress> {
    const congress = this.congressRepository.create(createCongressDto);

    return await this.congressRepository.save(congress);
  }

  async findOne(id: string): Promise<Congress> {
    const congress = await this.congressRepository.findOne({ where: { id } });

    if (!congress) {
      throw new NotFoundException(`Congress with ID ${id} not found`);
    }

    return congress;
  }

  async findAll(): Promise<Congress[]> {
    return await this.congressRepository.find();
  }

  async update(
    id: string,
    updateCongressDto: UpdateCongressDto,
  ): Promise<Congress> {
    const congressToUpdate = await this.congressRepository.preload({
      id,
      ...updateCongressDto,
    });

    if (!congressToUpdate)
      throw new NotFoundException(`Congress with ID ${id} not found`);

    await this.congressRepository.save(congressToUpdate);

    return congressToUpdate;
  }
}
