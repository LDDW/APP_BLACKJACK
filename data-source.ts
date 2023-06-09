// import "reflect-metadata"
import {DataSource} from "typeorm"

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "blackjack_user",
    password: "blackjack_pass",
    database: "blackjack",
    entities: ["dist/src/entities/*.entity.js"],
    migrations: ["dist/src/migrations/*"],
    migrationsTableName: "migration_table",
    logging: false,
    synchronize: true,
})
