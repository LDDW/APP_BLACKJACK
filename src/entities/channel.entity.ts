import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Channel {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    capacity: number

    @Column()
    message_path: string
}
