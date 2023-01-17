import { CreateUserDto, UpdateUserDto } from './../../dto/createUser.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async findUsers() {
    return this.userRepository.find();
  }

  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create({
      ...createUserDto,
      CreatedAt: new Date(),
    });
    await this.userRepository.save(newUser);
    return newUser;
  }

  async updateUser(updateUserDto: UpdateUserDto, id) {
    await this.userRepository.update({ id }, { ...updateUserDto });
  }

  async deleteUser(id: number) {
    this.userRepository.delete({ id });
  }
}
