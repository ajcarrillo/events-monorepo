import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Career } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class CareerService {
  constructor(
    @InjectRepository(Career)
    private readonly careerRepository: Repository<Career>,
  ) {}

  async findOne(id: number): Promise<Career> {
    return await this.careerRepository.findOneBy({ id });
  }

  async dictionary(): Promise<Career[]> {
    return await this.careerRepository.find({ select: ['id', 'descripcion'] });
  }
}
