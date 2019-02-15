/**
 * Created by adebayooluwadamilola on 2/3/19.
 */
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('roles')
export class Role {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 200 })
    name: string;

    @Column('text')
    description: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}
