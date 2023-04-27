/**
 * Commenter vos méthodes
 */
import {User} from "../entity/User";
import {hash} from "bcrypt";
import { AppDataSource } from "../data-source";

class AuthController {

	public email: string
	public password: string

	constructor() {

	}

	public signup(req, res, next) {
		const UserRepository = AppDataSource.getRepository(User);
		if (!UserRepository.findOneBy({email : req.body.email })){
			hash(req.body.password, 10)
				.then(hash => {
					const user = new User()
					user.email = req.body.email
					user.password = hash
					user.pseudo = req.body.pseudo
					user.avatar = (req.body.avatar) ? req.body.avatar : null
					AppDataSource.manager.save(user)
						.then(()=> res.status(201).json({ message: 'Utilisateur créé' }))
						.catch(error => res.status(400).json({ error }));
				})
				.catch(error => res.status(500).json({ error }));
		}else{
			return res.status(400);
		}
	}

	public login() {

	}

	// ...
}

export default new AuthController()
