import express from 'express';
import auth from '../src/controllers/auth.controller';
const usersRouter = express.Router();

usersRouter.get('/login', (req, res, next) => auth.login())
usersRouter.get('/signup', (req, res, next) => auth.signup(req, res, next))

export default usersRouter
