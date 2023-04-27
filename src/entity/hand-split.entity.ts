import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { HandPlayer } from "./hand-player.entity"

@Entity()
export class HandSplit {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    score: number

    @Column()
    bet: number

    @ManyToOne(() => HandPlayer, (handPlayer) => handPlayer.id)
    handPlayer: HandPlayer
}