import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"

import { Game } from "./game.entity"
import { User } from "./user.entity"

@Entity()
export class PlayerStack {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    amount: number

    @OneToMany(() => Game, (game) => game.id)
    game: Game
    id_game: number

    @OneToMany(() => User, (user) => user.id)
    users: User
}