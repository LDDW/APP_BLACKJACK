import {myDataSource} from "../../data-source";
import {GamePlayer} from "../entities/game-player.entity";

export const gamePlayerRepository = myDataSource.getRepository(GamePlayer).extend({
    get(id: number) {
        return this.findOne({
            where: {
                id: id
            }
        })
    },
});
