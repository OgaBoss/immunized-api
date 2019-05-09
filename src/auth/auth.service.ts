import {Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {UserEntity} from '../users/user.entity';
import * as crypto from 'crypto';
import {LoginUserDto} from '../dtos/LoginDto';
import {RegisterUser} from '../dtos/CreateUserDto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {
  }

  async login({email, password}: LoginUserDto): Promise<UserEntity> {
    const findOptions = {
      email, password: crypto.createHmac('sha256', password).digest('hex'),
    };
    return await this.userService.findUser(findOptions);
  }

  async register({email, username, password}: RegisterUser) {
    // Check if email does not exist

  }
}
