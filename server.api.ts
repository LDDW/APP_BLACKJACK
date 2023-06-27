import express from 'express';
import { portRestServer } from './config/server';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { socketConfig } from './config/socket';
import bodyParser from 'body-parser';
import cors from 'cors';
import { corsConfig } from './config/cors';
import usersRouter from './routes/users.route';
import apiRouter from './routes/api.route';
import console from "console";
import authRouter from "./routes/auth.route";
import gameRouter from "./routes/game.route";
// import channelRouter from "./routes/channel.route";
import {myDataSource} from "./data-source";
// import messageRouter from "./routes/message.route";

/**
 * Serveur web 3333 -> React
 */

const app = express();
const httpRestServer = createServer(app);

/**
 * Déclaration des middlewares
 */
app.use(bodyParser.json());
app.use(cors(corsConfig));
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Socket.io
 */
export const io = new Server(httpRestServer, socketConfig);
import "./src/services/socket/main";
/**
 * Initialisation de la connexion à la base de données
 */
myDataSource.initialize().then(() => {
	console.log("Connection to database established")
})
	.catch((err) => {
		console.log("Connection to database failed", err)
	});

/**
 * Déclaration des routes avec préfix
 */
app.use('/api', apiRouter);
app.use('/user', usersRouter);
app.use('/auth', authRouter);
app.use('/game', gameRouter);
// app.use('/channel', channelRouter);
// app.use('/message', messageRouter);

httpRestServer.listen(portRestServer, () => {
	console.log('listener on http://127.0.0.1:'+portRestServer);
})
