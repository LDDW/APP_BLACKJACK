/**
 * Commenter vos méthodes
 */
import {User} from "../entities/user.entity";
import {myDataSource} from "../../data-source";

class UsersController {
	constructor() {

	}

	public create() {

	}

	public update() {

	}

	public test(req, res, next) {
		return res.status(201).json({msg: "OK"})
	}
	// ...
}

export default new UsersController()
