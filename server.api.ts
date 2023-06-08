import express from 'express';
import { portRestServer } from './config/server';
import { createServer } from 'http';
import { Server } from "socket.io";
import { socketConfig } from './config/socket';
import bodyParser from 'body-parser';
import cors from 'cors';
import { corsConfig } from './config/cors';



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

  

httpRestServer.listen(portRestServer, () => {
	console.log('listener on http://127.0.0.1:'+portRestServer);
	console.log("lol")
})
