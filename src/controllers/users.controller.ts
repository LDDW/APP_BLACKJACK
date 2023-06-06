/**
 * Commenter vos méthodes
 */
import {User} from "../entities/user.entity";
import {myDataSource} from "../../data-source";

class UsersController {
	constructor() {

	}


	public create(email: string, password: string, username: string, avatar: string) {
		const user = new User();
		user.email = email;
		user.password = password; //TODO : hash password
		user.username = username;
		user.avatar = avatar;
		return myDataSource.manager.save(user);
	}

	public update() {

	}

	// ...
}

export default new UsersController()
