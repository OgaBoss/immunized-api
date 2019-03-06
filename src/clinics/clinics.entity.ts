/**
 * Created by adebayooluwadamilola on 2/16/19.
 */
/**
 * Created by adebayooluwadamilola on 2/16/19.
 */
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('clinics')
export class Clinics {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 200 })
    name: string;

    @Column('varchar')
    address: string;

    @Column('text')
    city: string;

    @Column('text')
    state: string;

    @Column('text')
    country: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}