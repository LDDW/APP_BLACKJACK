import {
    Entity,
    Column,
    PrimaryGeneratedColumn, ManyToOne,
} from "typeorm";
import {Game} from "./game.entity";

@Entity()
export class GameRound {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // nb_players: number;

    // @Column({type: "datetime"})
    // date_begin: Date;

    // @Column({type: "timestamp"})
    // duration: Date;

    @ManyToOne(() => Game, (game) => game.id)
    game: Game;

    @Column()
    result: string

    constructor(game, result) {
        this.game = game;
        this.result = result;
    }
}
