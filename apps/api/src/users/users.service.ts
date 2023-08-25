import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);

    await this.userRepository.save(user);

    delete user.password;

    return user;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(term: string | number) {
    let user: User;

    if (!isNaN(term as number)) {
      user = await this.userRepository.findOne({ where: { id: +term } });
    } else {
      const queryBuilder = this.userRepository.createQueryBuilder('user');

      user = await queryBuilder
        .where(
          'email LIKE :term OR LOWER(first_name) LIKE :term OR LOWER(last_name) LIKE :term',
          {
            term: `%${term.toString().toLowerCase()}%`,
          },
        )
        .getOne();
    }

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { ...userData } = updateUserDto;
    const userToUpdate = await this.userRepository.preload({
      id,
      ...userData,
    });

    if (!userToUpdate) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    await this.userRepository.save(userToUpdate);

    delete userToUpdate.password;

    return userToUpdate;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOneBy({ email });
  }
}
