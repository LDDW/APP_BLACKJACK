import {
    Entity,
    Column,
    PrimaryGeneratedColumn, ManyToOne,
} from "typeorm";
import {Game} from "./game.entity";
import {GameRound} from "./game-round.entity";

@Entity()
export class HandDealer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    score: number;

    @ManyToOne(() => GameRound, (gameRound) => gameRound.id)
    gameRound: GameRound;
}
