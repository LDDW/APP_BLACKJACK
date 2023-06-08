import {myDataSource} from "../../data-source";
import {User} from "../entities/user.entity";

export const userRepository = myDataSource &&  myDataSource.getRepository(User).extend({
    findByEmail(email: string) {
        return this.findOne({
            where: {
                email: email
            }
        })
    },
    findByUsername(username: string) {
        return this.findOne({
            where: {
                username: username
            }
        })
    },
    get(id: number) {
        return this.findOne({
            where: {
                id: id
            }
        })
    },
    getAll() {
        return this.find({
            select: ["id", "username", "avatar", "email"]
        });
    },
});
