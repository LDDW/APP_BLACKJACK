import express from 'express';
import { Server } from 'socket.io';
import { socketConfig } from './config/socket';
import { createServer } from 'http';
import { portWebServer } from './config/server';

const app = express();
const httpWebServer = createServer(app);
const io = new Server(httpWebServer, socketConfig);

httpWebServer.listen(portWebServer, () => {
	console.log('listener on http://127.0.0.1:'+portWebServer);
});

