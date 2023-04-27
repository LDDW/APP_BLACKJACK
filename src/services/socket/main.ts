import {io} from '../../../server.api';


let socketsConected = new Set();
io.on("connection", onConnected);

function onConnected(socket) { 

  console.log("Socket connected", socket.id);


}



// Join / create room
function joinRoom(roomId,socket) {
  socket.join(roomId);
}
// Leave room


// Leave room when player disconnect 
function sendToFrontPlayers(data,nom) {
  io.emit(nom, data);
}

function sendToFrontPlayer(data,nom,socket) {
  socket.emit(nom, data);
}

function sendToRoom(roomId,nom,data) {
  io.to(roomId).emit(nom, data);
}