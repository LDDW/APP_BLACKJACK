import express from 'express';
import users from '../src/controllers/users.controller';
import * as console from "console";

const usersRouter = express.Router();
import AuthMiddleware from "../src/middleware/authMiddleware";
import {userRepository} from "../src/repository/user.repository";

usersRouter.get('/create', (req, res, next) => users.create())
usersRouter.get('/test', (req, res, next) => AuthMiddleware.verify(req, res, next), (req, res, next) => users.test(req, res, next))

/**
 * Get a user
 * @param {number} id
 * @returns {Promise<User>}
 */
usersRouter.get('/:id', (req, res, next) => {
    if (!req.params.id) {
        console.log("Error: missing parameters");
        return res.send("Error: missing parameters").status(400);
    } else if (!Number(req.params.id)) {
        console.log("Error: id is not a number");
        return res.send("Error: id is not a number").status(400);
    }
    // TODO : If user is not an admin, only return the user's id, username and avatar
    // TODO : If user is an admin, return all the user's data
    let id = Number(req.params.id);
    userRepository.get(id).then(r => {
        if (!r) {
            return res.send("Error: user not found").status(404);
        } else {
            let user = {
                id: r.id,
                username: r.username,
                email: r.email,
                avatar: r.avatar,
            }
            res.send({user: user}).status(200);
        }
    }).catch(e => {
        console.log(e);
        res.send(e).status(400);
    })
});
//
// usersRouter.get("/me", (req, res, next) =>
//     AuthMiddleware.verify(req, res, next), (req, res, next) => {
//     if (!req.params.token) {
//         console.log("Error: missing parameters");
//         return res.send("Error: missing parameters").status(400);
//     }
// });

// usersRouter.delete('/:id', (req, res, next) => {
//     if (!req.params.id) {
//         console.log("Error: missing parameters");
//         return res.send("Error: missing parameters").status(400);
//     } else if (!Number(req.params.id)) {
//         console.log("Error: id is not a number");
//         return res.send("Error: id is not a number").status(400);
//     }
// }

export default usersRouter;
