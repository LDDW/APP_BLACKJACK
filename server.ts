import express from 'express';
import { createServer } from 'http';
import cors from 'cors'
import bodyParser from 'body-parser';
import * as path from 'path';
import { portWebServer } from './config/server';
import { corsConfig } from './config/cors';
import usersRouter from './routes/users.route';

/**
 * Serveur web 80 -> React
 */

const app = express();
const httpWebServer = createServer(app);

/**
 * Déclaration des middlewares
 */
app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('public'));

/**
 * Déclaration des routes avec préfix
 */
app.use('/user', usersRouter);

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

httpWebServer.listen(portWebServer, () => {
	console.log('listener on http://127.0.0.1:'+portWebServer);
});

