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

    private hand: string[];
    private point: number;
    private busted: boolean;

    constructor(idUser: number, idGame: number, game: Game) {
        this.userId = idUser;
        this.gameId = idGame;
        this.game = game;
        this.hand = new Array();
        this.point = 0;
        this.busted = false;
    }

    public getHand(): string[]
    {
        return this.hand;
    }

    public setHand(hand: string[]): void
    {
        this.hand = hand;
    }

    public getPoint(): number
    {
        return this.point;
    }

    public setPoint(point: number): void
    {
        this.point = point;
    }

    public isBusted(): boolean
    {
        return this.busted;
    }

    public setBusted(busted: boolean): void
    {
        this.busted = busted;
    }
}
