import {myDataSource} from "../../data-source";
import {GameRound} from "../entities/game-round.entity";

export const gameRoundRepository = myDataSource.getRepository(GameRound).extend({
    get(id: number) {
        return this.findOne({
            where: {
                id: id
            }
        })
    }
});
