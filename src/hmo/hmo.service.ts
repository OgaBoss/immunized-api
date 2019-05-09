import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HmoEntity } from './hmo.entity';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { BaseRepository } from '../BaseRepository';

@Injectable()
export class HmoService extends  BaseRepository<HmoEntity> {
    constructor(
        @InjectRepository(HmoEntity)
        private readonly hmoRepository: Repository<HmoEntity>) {
        super(hmoRepository);
    }
}

