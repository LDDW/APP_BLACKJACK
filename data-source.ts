// import "reflect-metadata"
import {DataSource} from "typeorm"
import * as console from "console";
import {User} from "./src/entities/user.entity";
import {Channel} from "./src/entities/channel.entity";
import {Game} from "./src/entities/game.entity";
import {GameRound} from "./src/entities/game-round.entity";
import {GamePlayer} from "./src/entities/game-player.entity";
import {HandPlayer} from "./src/entities/hand-player.entity";
import {HandSplit} from "./src/entities/hand-split.entity";
import {HandDealer} from "./src/entities/hand-dealer.entity";
import {PlayerStack} from "./src/entities/player-stack.entity";
import {UserChannel} from "./src/entities/user-channel.entity";

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "blackjack_user",
    password: "blackjack_pass",
    database: "blackjack",
    // entities: [User, Channel, Game, GameRound, GamePlayer, HandPlayer, HandSplit, HandDealer, PlayerStack, UserChannel],
    entities: ["dist/src/entities/*.entity.js"],
    migrations: ["dist/src/migrations/*"],
    migrationsTableName: "migration_table",
    logging: true,
    synchronize: true,
})

myDataSource.initialize().then(() => {
    console.log("Connection to database established")
})
    .catch((err) => {
        console.log("Connection to database failed", err)
    });
