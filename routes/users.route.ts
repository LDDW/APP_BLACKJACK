import express from 'express';

const usersRouter = express.Router();
import AuthMiddleware from "../src/middleware/authMiddleware";
import {userRepository} from "../src/repository/user.repository";
import UsersController from "../src/controllers/users.controller";
import {myDataSource} from "../data-source";
import {User} from "../src/entities/user.entity";

/**
 * Get a user
 * @param {number} id
 * @returns {Promise<User>}
 */
usersRouter.get('/:id', (req, res, next) => AuthMiddleware.verify(req, res, next), async (req, res, next) => {
    if (!req.params.id) {
        return res.send("Error: missing parameters").status(400);
    } else if (!Number(req.params.id)) {
        return res.send("Error: id is not a number").status(400);
    }
    UsersController.get(req, res, next);
});

/**
 * Delete a user
 * @param {number} id
 * @returns {Promise<User>}
 */
usersRouter.delete('/:id', (req, res, next) => AuthMiddleware.verify(req, res, next), async (req, res, next) => {
    if (!req.params.id) {
        return res.send("Error: missing parameters").status(400);
    } else if (!Number(req.params.id)) {
        return res.send("Error: id is not a number").status(400);
    }
    UsersController.delete(req, res, next);
});

/**
 * Update a user
 * @param {number} id
 * @returns {Promise<User>}
 */
usersRouter.put('/:id', (req, res, next) => AuthMiddleware.verify(req, res, next), async (req, res, next) => {

    if(req.params.id && req.body.username && req.body.email){
        UsersController.update(req, res, next)
    }
    else{
        res.status(401).json({message: "manque de paramètre"})
    }
});

/**
 * Get all users
 * @returns {Promise<User>}
 */
usersRouter.get('/', (req, res, next) => AuthMiddleware.verify(req, res, next), async (req, res, next) => {
    const UserRepository = myDataSource.getRepository(User);
    UserRepository.findOneBy({id : req.auth.userId.userId})
        .then( user => {
            if(user /* A modifier pour verifieer admin */ ){
                UsersController.getAll(req, res, next);
            }
            else{
                res.status(500).json({error: "error"})
            }

        })
        .catch(error => res.status(500).json({error}));
});

export default usersRouter;
