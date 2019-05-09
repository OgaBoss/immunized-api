import { Module } from '@nestjs/common';
import { HmoService } from './hmo.service';
import { HmoEntity } from './hmo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    providers: [HmoService],
    controllers: [],
    imports: [TypeOrmModule.forFeature([HmoEntity])],
})
export class HmoModule {}
