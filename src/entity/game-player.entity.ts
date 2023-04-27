import {
    Entity,
    Column,
    PrimaryGeneratedColumn, ManyToOne,
} from "typeorm";
import {Game} from "./game.entity";
import {User} from "./user.entity";

@Entity()
export class GamePlayer {
    @PrimaryGeneratedColumn()
    @ManyToOne(() => Game, (game) => game.id)
    game: Game;

    @PrimaryGeneratedColumn()
    @ManyToOne(() => User, (user) => user.id)
    user: User;
    
    @Column({type: "timestamp"})
    duration: Date;
}
