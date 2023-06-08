import express from 'express';
import users from '../src/controllers/users.controller';
import * as console from "console";
const usersRouter = express.Router();
import AuthMiddleware from "../src/middleware/authMiddleware";

usersRouter.get('/create', (req, res, next) => users.create())
usersRouter.get('/test', (req, res, next) => AuthMiddleware.verify(req, res, next),(req, res, next) => users.test(req, res, next))
// usersRouter.get('/create', (req, res, next) => {
//     users.create("test", "test", "test", "test").then(r => {
//         console.log(r);
//         res.send(r);
//     })
// })

export default usersRouter
