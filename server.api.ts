import express from 'express';
import { portRestServer } from './config/server';
import { createServer } from 'http';

const app = express();
const httpRestServer = createServer(app);

httpRestServer.listen(portRestServer, () => {
	console.log('listener on http://127.0.0.1:'+portRestServer);
})
