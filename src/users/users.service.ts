import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, Connection } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
      private connection: Connection
    ){}

    findByUsername(username: string): Promise<User> {
      return this.usersRepository.findOne({where: {
        username: username
      }});
    }

    findAll(): Promise<User[]> {
      return this.usersRepository.find();
    }

    findOne(id: string): Promise<User>{
      return this.usersRepository.findOne(id);
    }

    async createUser(createUserDto: CreateUserDto) {
      const user = new User();
      user.firstName = createUserDto.firstName;
      user.lastName = createUserDto.lastName;
      user.username = createUserDto.username;
      user.password = createUserDto.password;

      return this.usersRepository.save(user);
    }

    async remove(id: string): Promise<void> {
      await this.usersRepository.delete(id);
    }
}
  