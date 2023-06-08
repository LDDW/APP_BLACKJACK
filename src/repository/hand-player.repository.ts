import {myDataSource} from "../../data-source";
import {HandPlayer} from "../entities/hand-player.entity";

export const handPlayerRepository = myDataSource.getRepository(HandPlayer).extend({
    get(id: number) {
        return this.findOne({
            where: {
                id: id
            }
        })
    }
});
