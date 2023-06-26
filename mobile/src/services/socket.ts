import io from 'socket.io-client';
import { Api } from "../config/api";

const wsOptions = {
	url: Api,
	config: {
		path: '/ws',
		autoConnect: true,
		reconnection: true,
		transports: ['websocket', 'polling']
	}
}

const Ws  = io(wsOptions.url, {...wsOptions.config})

export default Ws
