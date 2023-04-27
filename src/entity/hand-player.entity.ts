import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { PlayerStack } from "./player-stack.entity"
import { GameRound } from "./game-round.entity"

@Entity()
export class HandPlayer {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    score: number

    @Column()
    bet: number

    @OneToMany(() => PlayerStack, (playerStack) => playerStack.id)
    playerStack: PlayerStack
    id_stack: number

    @OneToMany(() => GameRound, (gameRound) => gameRound.id)
    gameRound: GameRound
    id_gameround: number
}