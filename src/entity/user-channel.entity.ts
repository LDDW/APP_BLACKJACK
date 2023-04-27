import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";
import { Channel } from "./channel.entity";

@Entity()
export class UserChannel {
    @PrimaryGeneratedColumn()
    @ManyToOne(() => User, user => user.userChannels)
    @JoinColumn({ name: "id_player" })
    user: User;

    @PrimaryGeneratedColumn()
    @ManyToOne(() => Channel, channel => channel.userChannels)
    @JoinColumn({ name: "id_channel" })
    channel: Channel;

    @Column()
    status: string;
}