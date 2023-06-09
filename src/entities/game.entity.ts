import {Column, Entity, OneToMany, PrimaryGeneratedColumn,} from "typeorm";
import {GamePlayer} from "./game-player.entity";
import {GameRound} from "./game-round.entity";
import {gameRoundRepository} from "../repository/game-round.repository";
import {userRepository} from "../repository/user.repository";
import * as console from "console";
import {myDataSource} from "../../data-source";


@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nb_players: number;

    @Column({type: "datetime"})
    date_begin: Date;

    @Column({type: "timestamp"})
    duration: Date;


    /* @OneToMany(() => GamePlayer, gamePlayer => gamePlayer.game)
    gamePlayers: GamePlayer[]; */

    constructor() {
        this.nb_players = 0;
        this.date_begin = new Date();
    }

    public saveRound(data) {
        const gameRound = new GameRound(this, data);
        gameRoundRepository.save(gameRound);
    }
}
