/**
 * Created by adebayooluwadamilola on 2/16/19.
 */
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('hmos')
export class HmoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 200 })
    name: string;

    @Column('varchar')
    description: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}
