import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Channel {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    capacity: string

    @Column()
    message_path: string
}