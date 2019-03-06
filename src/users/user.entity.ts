/**
 * Created by adebayooluwadamilola on 2/16/19.
 */
import {Entity, OneToOne, BeforeInsert, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn} from 'typeorm';
import {Hmos} from '../hmo/hmo.entity';
import {Clinics} from '../clinics/clinics.entity';
import {Role} from '../roles/roles.entity';

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(type => Role)
    @JoinColumn()
    role: Role;

    @OneToOne(type => Hmos)
    @JoinColumn()
    hmo: Hmos;

    @OneToOne(type => Clinics)
    @JoinColumn()
    clinic: Clinics;

    @Column('varchar', { length: 15 })
    dob: string;

    @Column('varchar')
    password: string;

    @Column('varchar', { length: 25 })
    relationship: string;

    @Column('varchar', { length: 20 })
    phone: string;

    @Column('varchar', { length: 100 })
    email: string;

    @Column('varchar', { length: 200 })
    imageUrl: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}
