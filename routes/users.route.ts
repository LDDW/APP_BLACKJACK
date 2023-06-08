import express from 'express';

const usersRouter = express.Router();
import AuthMiddleware from "../src/middleware/authMiddleware";
import {userRepository} from "../src/repository/user.repository";

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
    let identifiedUserId = req.auth.userId.userId;
    let identifiedUser = await userRepository.get(Number(identifiedUserId));
    let id = Number(req.params.id);
    if (identifiedUser.id !== id && !identifiedUser.roles.includes("admin")) {
        return res.send("Error: unauthorized").status(401);
    } else {
        return res.send("Error: not implemented").status(501);
    }
});

/**
 * Delete a user
 * @param {number} id
 * @returns {Promise<User>}
 */
usersRouter.delete('/:id', (req, res, next) => AuthMiddleware.verify(req, res, next), async (req, res, next) => {
    let identifiedUserId = req.auth.userId.userId;
    let identifiedUser = await userRepository.get(Number(identifiedUserId));
    if (!identifiedUser.roles.includes("admin")) {
        return res.send("Error: unauthorized").status(401);
    }
    if (!req.params.id) {
        return res.send("Error: missing parameters").status(400);
    } else if (!Number(req.params.id)) {
        return res.send("Error: id is not a number").status(400);
    }
    return res.send("Error: not implemented").status(501);
});


/**
 * Update a user
 * @param {number} id
 * @returns {Promise<User>}
 */
usersRouter.put('/:id', (req, res, next) => AuthMiddleware.verify(req, res, next), async (req, res, next) => {
    let identifiedUserId = req.auth.userId.userId;
    let identifiedUser = await userRepository.get(Number(identifiedUserId));
    if (!identifiedUser.roles.includes("admin") || identifiedUser.id !== Number(req.params.id)) {
        return res.send("Error: unauthorized").status(401);
    }
    if (!req.params.id) {
        return res.send("Error: missing parameters").status(400);
    } else if (!Number(req.params.id)) {
        return res.send("Error: id is not a number").status(400);
    }

    let toUpdate = {
        email: req.body.email,
        password: null,
        username: req.body.username,
        avatar: req.body.avatar,
        roles: null
    }
    if (identifiedUser.roles.includes("admin") && req.body.roles) {
        toUpdate.roles = req.body.roles;
    } else if (!identifiedUser.roles.includes("admin") && req.body.roles) {
        return res.send("Error: unauthorized").status(401);
    } else if (identifiedUser.id === Number(req.params.id) && req.body.password) {
        toUpdate.password = req.body.password;
    } else if ((identifiedUser.id !== Number(req.params.id) || !identifiedUser.roles.includes("admin")) && req.body.password) {
        return res.send("Error: unauthorized").status(401);
    }

    if (!toUpdate.email && !toUpdate.password && !toUpdate.username && !toUpdate.avatar && !toUpdate.roles) {
        return res.send("Error: missing parameters").status(400);
    }
    return res.send("Error: not implemented").status(501);
});

/**
 * Get all users
 * @returns {Promise<User>}
 */
usersRouter.get('/', (req, res, next) => AuthMiddleware.verify(req, res, next), async (req, res, next) => {
    let identifiedUserId = req.auth.userId.userId;
    let identifiedUser = await userRepository.get(Number(identifiedUserId));
    if (!identifiedUser.roles.includes("admin")) {
        return res.send("Error: unauthorized").status(401);
    }
    return res.send("Error: not implemented").status(501);
});

export default usersRouter;
