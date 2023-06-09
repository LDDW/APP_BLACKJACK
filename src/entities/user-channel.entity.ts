import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, PrimaryColumn, OneToMany} from "typeorm";
import { User } from "./user.entity";
import { Channel } from "./channel.entity";

@Entity()
export class UserChannel {
    @PrimaryColumn()
    userId: number;

    @ManyToOne(() => User, user => user.id )
    user: User;

    @PrimaryColumn()
    channelId: number;

    @ManyToOne(() => Channel, channel => channel.id)
    channel: Channel;

    @Column()
    status: string;
}
