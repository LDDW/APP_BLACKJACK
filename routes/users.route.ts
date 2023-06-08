import express from 'express';
import users from '../src/controllers/users.controller';
import * as console from "console";
const usersRouter = express.Router();

usersRouter.get('/create', (req, res, next) => users.create())

export default usersRouter
