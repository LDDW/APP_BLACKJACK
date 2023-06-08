import {myDataSource} from "../../data-source";
import {User} from "../entities/user.entity";

export const userRepository = myDataSource.getRepository(User).extend({
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
    create(email: string, password: string, username: string, avatar: string) {
        const user = new User();
        user.email = email;
        user.password = password; //TODO : hash password
        user.username = username;
        user.avatar = avatar;
        return this.save(user);
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
