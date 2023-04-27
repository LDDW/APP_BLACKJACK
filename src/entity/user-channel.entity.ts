import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, PrimaryColumn} from "typeorm";
import { User } from "./user.entity";
import { Channel } from "./channel.entity";

@Entity()
export class UserChannel {
    @PrimaryColumn()
    @ManyToOne(() => User, user => user.userChannels)
    @JoinColumn({ name: "id_player" })
    user: User;

    @PrimaryColumn()
    @ManyToOne(() => Channel, channel => channel.userChannels)
    @JoinColumn({ name: "id_channel" })
    channel: Channel;

    @Column()
    status: string;
}
