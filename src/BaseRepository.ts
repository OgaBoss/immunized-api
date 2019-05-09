/**
 * Created by adebayooluwadamilola on 3/6/19.
 */

import { Repository } from 'typeorm';

export class BaseRepository<T> {
    constructor(private readonly repository: Repository<T>) {}

    async findAll(): Promise<T[]> {
        return await this.repository.find();
    }

    async findOne(id: string|number): Promise<T> {
        return await this.repository.findOne(id);
    }
}
