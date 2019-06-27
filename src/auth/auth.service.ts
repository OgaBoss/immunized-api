import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {UserEntity} from '../users/user.entity';
import * as crypto from 'crypto';
import {LoginUserDto} from '../dtos/LoginDto';
import {RegisterUser} from '../dtos/CreateUserDto';
import {getRepository} from 'typeorm';
import {validate} from 'class-validator';
import {ConfigService} from "../config/config.service";
// tslint:disable-next-line:no-var-requires
const jwt = require('jsonwebtoken');

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService, private readonly config: ConfigService) {
  }

  async login({email, password}: LoginUserDto): Promise<UserEntity> {
    const findOptions = {
      email, password: crypto.createHmac('sha256', password).digest('hex'),
    };
    return await this.userService.findUser(findOptions);
  }

  async register({email, name, password}: RegisterUser) {
    // Check if email does not exist
    const user = await getRepository(UserEntity)
      .createQueryBuilder('user')
      .where('user.email = :email', {email})
      .getOne();

    if (user) {
      const error = {email: 'Email must be unique'};
      throw new HttpException({message: 'Input data validation failed', error}, HttpStatus.BAD_REQUEST);
    }

    // Create new User
    const newUser =  new UserEntity();
    newUser.name = name;
    newUser.email = email;
    newUser.password = crypto.createHmac('sha256', password).digest('hex');

    const errors = await validate(newUser);

    if (errors.length > 0) {
      const error = {username: 'Userinput is not valid.'};
      throw new HttpException({message: 'Input data validation failed', error}, HttpStatus.BAD_REQUEST);
    } else {

    }
  }

  public generateJWT(user) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
      id: user.id,
      username: user.username,
      email: user.email,
      exp: exp.getTime() / 1000,
    }, this.config.getSecret());
  }
}
