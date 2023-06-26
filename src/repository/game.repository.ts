import {myDataSource} from "../../data-source";
import {Game} from "../entities/game.entity";

export const gameRepository = myDataSource.getRepository(Game).extend({
    get(id: number) {
        return this.findOne({
            where: {
                id: id
            },
            relations: {
                gamePlayers: true,
            },
            select: {
                gamePlayers: {
                    userId: true,
                    duration: true,
                }
            }
        })
    },
    getAll() {
        return this.find();
    },
    findByDate(date: Date) {
        return this.find({
            where: {
                date_begin: date
            }
        })
    },
});
