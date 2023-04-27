import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"

import { Game } from "./game.entity"
import { Users } from "./users.entity"

@Entity()
export class PlayerStack {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    amount: number

    @OneToMany(() => Game, (game) => game.id)
    game: Game
    id_game: number

    @OneToMany(() => Users, (users) => users.id)
    users: Users
    id_player: number
}