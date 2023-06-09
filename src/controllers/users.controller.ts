/**
 * Commenter vos méthodes
 */
import {User} from "../entities/user.entity";
import {myDataSource} from "../../data-source";
import {userRepository} from "../repository/user.repository";
import console from "console";

class UsersController {
	constructor() {

	}

	public delete(req, res, next) {
		let identifiedUserId = req.auth.userId.userId;
		const UserRepository = myDataSource.getRepository(User);
		UserRepository.findOneBy({id : req.params.id})
			.then( user => {
				if(user.id == req.auth.userId.userId) {
					myDataSource.manager.remove(user)
						.then(() => res.status(500).json({message: "Utilisateur supprimée"}))
						.catch(error => res.status(400).json({error}))
				}else {
					res.status(401).json({error: "error"});
				}
			})
			.catch(error => res.status(500).json({error}));
	}
	public update(req, res, next) {
		let identifiedUserId = req.auth.userId.userId;
		const UserRepository = myDataSource.getRepository(User);
		UserRepository.findOneBy({id : req.params.id})
			.then( user => {
				if(user.id == req.auth.userId.userId) {
					user.username = req.body.username;
					user.email = req.body.email;
					myDataSource.manager.save(user)
						.then(() => res.status(201).json({message: "Modification réussi"}))
						.catch( error => res.status(401).json({error}))

				}else {
					res.status(401).json({error: "error"});
				}
			})
			.catch(error => res.status(500).json({error}));
	}

	public get(req, res, next) {
		let identifiedUserId = req.auth.userId.userId;
		const UserRepository = myDataSource.getRepository(User);
		UserRepository.findOneBy({id : req.params.id})
			.then(user => {
				if(user.id == req.auth.userId.userId){
					let userData = {
						id: user.id,
						username: user.username,
						email: user.email,
						avatar: user.avatar,
					}
					return res.status(201).json({user: userData});
				}else{
					res.status(401).json({error: "error"});
				}
			})
			.catch(error => res.status(500).json({error}));
	}
	public getAll(req, res, next) {
		const UserRepository = myDataSource.getRepository(User);
		UserRepository.find({
			select: {
				username: true,
				email: true,
				roles: true,
				avatar: true
			}
		})
			.then(userAll => res.status(201).json({user: userAll}))
			.catch(error => res.status(401).json({error}))
	}
}

export default new UsersController()
