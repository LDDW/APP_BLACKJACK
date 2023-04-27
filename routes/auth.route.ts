import express from 'express';
import auth from '../src/controllers/auth.controller';
const authRouter = express.Router();

authRouter.get('/login', (req, res, next) => auth.login())
authRouter.get('/signup', (req, res, next) => auth.signup(req, res, next))

export default authRouter
