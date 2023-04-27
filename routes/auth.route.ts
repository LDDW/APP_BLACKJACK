import express from 'express';
import auth from '../src/controllers/auth.controller';
const usersRouter = express.Router();

usersRouter.get('/login', (req, res, next) => auth.login())

export default usersRouter
