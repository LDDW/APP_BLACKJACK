import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm"
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

    @ManyToOne(() => PlayerStack, (playerStack) => playerStack.id)
    playerStack: PlayerStack

    @ManyToOne(() => GameRound, (gameRound) => gameRound.id)
    gameRound: GameRound
}
