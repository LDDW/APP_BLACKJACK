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
		const UserRepository = myDataSource.getRepository(User);
		UserRepository.findOneBy({id : req.auth.userId.userId})
			.then(identifiedUser => {
				UserRepository.findOneBy({id : req.params.id})
					.then( user => {
						if(user.id == req.auth.userId.userId || identifiedUser.roles.includes("ROLE_ADMIN")) {
							myDataSource.manager.remove(user)
								.then(() => res.status(200).json({message: "Utilisateur supprimée"}))
								.catch(error => res.status(400).json({error}))
						}else {
							res.status(401).json({error: "error"});
						}
					})
					.catch(error => res.status(500).json({error}));
			})
			.catch(error => res.status(500).json({ error }));
	}

	public update(req, res, next) {
		const UserRepository = myDataSource.getRepository(User);
		UserRepository.findOneBy({id : req.auth.userId.userId})
			.then(identifiedUser => {
				UserRepository.findOneBy({id : req.params.id})
					.then( user => {
						if(user.id == req.auth.userId.userId || identifiedUser.roles.includes("ROLE_ADMIN")) {
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
			})
			.catch(error => res.status(500).json({ error }));
	}

	public get(req, res, next) {
		const UserRepository = myDataSource.getRepository(User);
		UserRepository.findOneBy({id : req.params.id})
			.then(user => {
				let userData = {
					id: user.id,
					username: user.username,
					email: user.email,
					roles: user.roles,
					avatar: user.avatar,
				}
				return res.status(201).json({user: userData});
			})
			.catch(error => res.status(500).json({error}));
	}

	public getAll(req, res, next) {
		const UserRepository = myDataSource.getRepository(User);
		UserRepository.find({
			select: {
				id: true,
				username: true,
				email: true,
				roles: true,
				avatar: true
			}
		})
			.then(userAll => res.status(201).json({user: userAll}))
			.catch(error => res.status(401).json({error}))
	}

	public getConnectedUser(req, res, next) {
		const UserRepository = myDataSource.getRepository(User);
		return res.status(201).json(req);
		// UserRepository.findOneBy({id : req.auth.userId.userId})
		// 	.then(identifiedUser => {
		// 		return res.status(201).json({user: identifiedUser});
		// 	})
		// 	.catch(error => res.status(500).json({ error }));
	}

	public checkRole(req, res, next) {
		const UserRepository = myDataSource.getRepository(User);
		UserRepository.findOneBy({id : req.auth.userId.userId})
			.then(identifiedUser => {
				if(identifiedUser.roles.includes("ROLE_ADMIN")){
					res.status(200).json('ok ma gueule')
				}
				res.status(401).json('pas ok ma gueule')
			})
			.catch(error => res.status(401).json({error}))
	}
}

export default new UsersController()
