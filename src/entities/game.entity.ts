import {Column, Entity, OneToMany, PrimaryGeneratedColumn,} from "typeorm";
import {GamePlayer} from "./game-player.entity";
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


    @OneToMany(() => GamePlayer, gamePlayer => gamePlayer.game)
    gamePlayers: GamePlayer[];

    // async getPlayers() {
    //     let users = [];
    //     for (const gamePlayer of this.gamePlayers) {
    //         let userId = gamePlayer.userId;
    //         let user = userRepository.get(userId);
    //         console.log(user);
    //         users.push(user);
    //     }
    //
    //     return users;
    // }
}
