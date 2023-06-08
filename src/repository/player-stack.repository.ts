import {myDataSource} from "../../data-source";
import {PlayerStack} from "../entities/player-stack.entity";

export const playerStackRepository = myDataSource.getRepository(PlayerStack).extend({
    get(id: number) {
        return this.findOne({
            where: {
                id: id
            }
        })
    }
});
