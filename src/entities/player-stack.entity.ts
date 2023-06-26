import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm"

import { Game } from "./game.entity"
import { User } from "./user.entity"
import {HandPlayer} from "./hand-player.entity";

@Entity()
export class PlayerStack {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    amount: number

    @ManyToOne(() => Game, (game) => game.id)
    game: Game

    @ManyToOne(() => User, user => user.id )
    user: User;
}
