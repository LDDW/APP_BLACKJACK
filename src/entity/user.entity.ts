import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserChannel } from "./user-channel.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column({ unique: true })
    username: string

    @Column()
    avatar: string

    @OneToMany(() => UserChannel, userChannel => userChannel.user)
    userChannels: UserChannel[];
}
