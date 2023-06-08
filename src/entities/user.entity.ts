import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import {GamePlayer} from "./game-player.entity";

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

    @Column()
    roles: string

    @OneToMany(() => GamePlayer, gamePlayer => gamePlayer.user)
    gamePlayers: GamePlayer[];
}
