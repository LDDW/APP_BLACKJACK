import {myDataSource} from "../../data-source";
import {HandDealer} from "../entities/hand-dealer.entity";

export const handDealerRepository = myDataSource.getRepository(HandDealer).extend({
    get(id: number) {
        return this.findOne({
            where: {
                id: id
            }
        })
    }
});
