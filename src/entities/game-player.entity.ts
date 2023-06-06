import {
    Entity,
    Column,
    ManyToOne, PrimaryColumn,
} from "typeorm";
import {Game} from "./game.entity";
import {User} from "./user.entity";

@Entity()
export class GamePlayer {
    @PrimaryColumn()
    gameId: number;

    @ManyToOne(() => Game, (game) => game.id)
    game: Game;

    @PrimaryColumn({type: "int"})
    userId: number;

    @ManyToOne(() => User, (user) => user.id)
    user: User;

    @Column({type: "timestamp"})
    duration: Date;
}
