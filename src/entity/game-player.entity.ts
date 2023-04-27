import {
    Entity,
    Column,
    PrimaryGeneratedColumn, ManyToOne, PrimaryColumn,
} from "typeorm";
import {Game} from "./game.entity";
import {User} from "./user.entity";

@Entity()
export class GamePlayer {
    @PrimaryColumn()
    @ManyToOne(() => Game, (game) => game.id)
    game: Game;

    @PrimaryColumn()
    @ManyToOne(() => User, (user) => user.id)
    user: User;

    @Column({type: "timestamp"})
    duration: Date;
}
