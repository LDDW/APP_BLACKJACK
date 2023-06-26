import express from 'express';
import auth from '../src/controllers/auth.controller';
const authRouter = express.Router();

authRouter.post('/login', (req, res, next) => auth.login(req, res, next))
authRouter.post('/signup', (req, res, next) => auth.signup(req, res, next))

export default authRouter

