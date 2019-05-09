import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { BaseRepository } from '../BaseRepository';
import { LoginUserDto } from '../dtos/LoginDto';

@Injectable()
export class UsersService extends BaseRepository<UserEntity> {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>) {
        super(userRepository);
    }

    async findUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
        return await this.userRepository.findOne(loginUserDto);
    }
}
