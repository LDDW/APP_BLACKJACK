import {myDataSource} from "../../data-source";
import {HandSplit} from "../entities/hand-split.entity";

export const handSplitRepository = myDataSource.getRepository(HandSplit).extend({
    get(id: number) {
        return this.findOne({
            where: {
                id: id
            }
        })
    },
});
