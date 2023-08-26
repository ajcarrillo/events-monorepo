import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto, UpdateEventDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEntity } from './entities';
import { Repository } from 'typeorm';
import { CongressService } from './congress.service';
import { CareerService } from './career.service';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
    private readonly congressService: CongressService,
    private readonly careerService: CareerService,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<EventEntity> {
    let congress = null;
    let career = null;

    if (createEventDto.congress_id) {
      congress = await this.congressService.findOne(createEventDto.congress_id);
    }

    if (createEventDto.career_id) {
      career = await this.careerService.findOne(createEventDto.career_id);
    }

    const event = this.eventRepository.create({
      ...createEventDto,
      congress,
      career,
    });

    return await this.eventRepository.save(event);
  }

  async findAll(): Promise<EventEntity[]> {
    return await this.eventRepository.find({
      relations: ['congress', 'career'],
    });
  }

  async findOne(id: string): Promise<EventEntity> {
    const event = await this.eventRepository.findOne({
      where: { id },
      relations: ['congress'],
    });
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }

    return event;
  }

  async update(
    id: string,
    updateEventDto: UpdateEventDto,
  ): Promise<EventEntity> {
    await this.findOne(id);
    await this.eventRepository.update(id, updateEventDto);

    return this.findOne(id);
  }
}
