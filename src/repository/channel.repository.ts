import {myDataSource} from "../../data-source";
import {Channel} from "../entities/channel.entity";

export const channelRepository = myDataSource.getRepository(Channel).extend({
    get(id: number) {
        return this.findOne({
            where: {
                id: id
            }
        })
    },
    getAll() {
        return this.find();
    },
});
