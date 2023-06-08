// Importez le module io depuis votre fichier server.api
import { io } from '../../../server.api';

// Utilisez un objet pour stocker les utilisateurs connectés
let users = [];

// Écoutez les connexions des utilisateurs
io.on('connection', (socket) => {
  console.log(`⚡️: ${socket.id} L'utilisateur vient de se connecter !`);
  sendRoomList()

  // Rejoindre une room spécifique
  socket.on("joinRoom", (roomName) => {
    socket.join(roomName);
    console.log(`🚪: ${socket.id} a rejoint la room ${roomName}`);
    sendRoomList()

  });

  // Envoie d'un message à tous les clients dans une room spécifique
  socket.on("message", (data) => {
    const roomName = data.room;
    console.log(data);
    io.to(roomName).emit("messageResponse", data);
  });

  // Envoie d'un événement de saisie à tous les clients dans une room spécifique, sauf à l'émetteur
  socket.on("typing", (data) => {
    const roomName = data.room;
    socket.to(roomName).emit("typingResponse", data.typing);
  });

  // Gestion des nouveaux utilisateurs
  socket.on("newUser", (data) => {
    console.log(data)
    console.log(users)
    const roomName = data.room;
    users.push(data.userName);
    console.log(users);
    io.to(roomName).emit("newUserResponse", users);
  });

  // Quitter une room spécifique
  socket.on("leaveRoom", (roomName) => {
    socket.leave(roomName);
    console.log(`🚪: ${socket.id} a quitté la room ${roomName}`);
  });

  // Déconnexion de l'utilisateur
  socket.on('disconnect', () => {
    console.log('🔥: Un utilisateur s\'est déconnecté');
    users = users.filter(user => user.socketID !== socket.id);
    io.emit("newUserResponse", users);
    socket.disconnect();
  });

  function sendRoomList(){
    const rooms = io.sockets.adapter.rooms;
    const roomList = Array.from(rooms.keys());
    io.emit("roomListResponse", roomList);
}
});
