import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserChannel } from "./user-channel.entity";

@Entity()
export class Channel {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    capacity: string

    @Column()
    message_path: string

    @OneToMany(() => UserChannel, userChannel => userChannel.channel)
    userChannels: UserChannel[];
}