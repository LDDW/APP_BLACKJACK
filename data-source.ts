// import "reflect-metadata"
import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "blackjack_user",
    password: "blackjack_pass",
    database: "blackjack",
    entities: [__dirname + "/dist/src/entities/*"],
    migrations: ["dist/src/migrations/*"],
    migrationsTableName: "migration_table",
    logging: true,
    synchronize: false,
})
