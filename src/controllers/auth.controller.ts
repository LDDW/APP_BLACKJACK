/**
 * Commenter vos méthodes
 */
import {User} from "../entities/user.entity";
import {hash, compare} from "bcrypt";
import {myDataSource} from "../../data-source";
import {sign} from "jsonwebtoken";

class AuthController {

	public email: string
	public password: string

	constructor() {

	}
	public signup(req, res, next) {
		const UserRepository = myDataSource.getRepository(User);
		UserRepository.findOneBy({email : req.body.email})
			.then(user => {
		 		if(user){
					 return res.status(401).json({error: "Email déjà utilisée"})
		 		}
				 hash(req.body.password, 10)
					 .then(hash => {
						const user = new User;
						user.email = req.body.email
						user.password = hash
						user.username = req.body.username
						user.avatar = (req.body.avatar) ? req.body.avatar : ""

						 myDataSource.manager.save(user)
							.then(()=> res.status(201).json({message: "Utilisateur créé"}))
							.catch(error => res.status(400).json({error}))
					})
					.catch(error => res.status(500).json({error}));
			})
			.catch(error => res.status(500).json({error}));
	}

	public login(req, res, next) {
		const UserRepository = myDataSource.getRepository(User);
		UserRepository.findOneBy({email : req.body.email})
			.then(user => {
				if(!user){
					return res.status(401).json({error: "Utilisateur non trouvé"})
				}
				compare(req.body.password, user.password)
					.then(valid => {
						if (!valid) {
							return res.status(401).json({error: "Mot de passe incorect"});
						}
						res.status(200).json({
							userId: user.id,
							token: sign(
								{userId: user.id},
								'AZERTY',
								{ expiresIn: '24h'}
							)
						});
					})
					.catch(error => res.status(500).json({error}));
			})
			.catch(error => res.status(500).json({error}));
	}

	public test(req, res, next){
		return res.status(201).json({message: "authentification réussi"})
	}
}
export default new AuthController()
