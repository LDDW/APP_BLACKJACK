import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from "typeorm";

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
}
