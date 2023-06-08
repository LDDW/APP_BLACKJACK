import express from 'express';
import users from '../src/controllers/users.controller';
import * as console from "console";
const usersRouter = express.Router();

usersRouter.get('/create', (req, res, next) => {
    users.create("test", "test", "test", "test").then(r => {
        console.log(r);
        res.send(r);
    })
})

export default usersRouter
