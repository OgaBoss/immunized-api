/**
 * Created by adebayooluwadamilola on 2/16/19.
 */
import {Entity, OneToOne, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn} from 'typeorm';
import {HmoEntity} from '../hmo/hmo.entity';
import {Clinics} from '../clinics/clinics.entity';
import {Role} from '../roles/roles.entity';

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(type => Role)
    @JoinColumn()
    role: Role;

    @OneToOne(type => HmoEntity)
    @JoinColumn()
    hmo: HmoEntity;

    @OneToOne(type => Clinics)
    @JoinColumn()
    clinic: Clinics;

    @Column('varchar', { length: 15, default: null })
    dob: string;

    @Column('varchar', {default: null})
    name: string;

    @Column('varchar', {default: null})
    password: string;

    @Column('varchar', { length: 25, default: null })
    reminder: string;

    @Column('varchar', { length: 20, default: null })
    phone: string;

    @Column('varchar', { length: 100, default: null })
    email: string;

    @Column('varchar', { length: 200, default: null })
    imageUrl: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}
