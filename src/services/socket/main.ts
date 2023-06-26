// Importez le module io depuis votre fichier server.api
import { io } from "../../../server.api";

// Utilisez un objet pour stocker les utilisateurs connectés
// name firstname avatar objet
let users = [];

// Écoutez les connexions des utilisateurs
io.on("connection", (socket) => {
  console.log(`⚡️: ${socket.id} L'utilisateur vient de se connecter !`);
  sendRoomList();

  // Rejoindre une room spécifique
  socket.on("joinRoom", (roomName) => {
    socket.join(roomName);
    console.log(`🚪: ${socket.id} a rejoint la room ${roomName}`);
    sendUsersRoom(roomName);
  });

  socket.on("save", (data) => {
    users.push(data);
  });


  // Function global pour la partie back 
  function global(info) {
    switch (info.restrict) {
      case "user":
        socket.emit(info.function, info.data);
        break;
      case "users":
        io.emit(info.function, info.data);
        break;
      case "room":
        io.to(info.function).emit(info.data);
        break;
      default:
        console.log("Erreur function global pas de restrict info")
        break;
    }
  }

  // Envoie d'un message à tous les clients dans une room spécifique
  socket.on("message", (data) => {
    const roomName = data.room;
    io.to(roomName).emit("messageResponse", data);
  });

  // Envoie d'un événement de saisie à tous les clients dans une room spécifique, sauf à l'émetteur
  socket.on("typing", (data) => {
    const roomName = data.room;
    socket.to(roomName).emit("typingResponse", data.typing);
  });

  function sendUsersRoom(roomName) {
    let roomsused = [];
    let i = 0;

    while (i < users.length) {
      if (roomName == users[i].room) {
        console.log("dans le if");
        roomsused.push(users[i].userName);
      }
      i++;
    }
    console.log("Dans la function");
    console.log(roomsused);

    io.to(roomName).emit("newUserResponse", roomsused);
  }

  // Gestion des nouveaux utilisateurs
  socket.on("newUser", (data) => {
    const roomName = data.room;
    users.push(data);
    sendUsersRoom(roomName);
  });

  // Quitter une room spécifique
  socket.on("leaveRoom", (roomName) => {
    socket.leave(roomName);
    console.log(`🚪: ${socket.id} a quitté la room ${roomName}`);
  });

  // Déconnexion de l'utilisateur
  socket.on("disconnect", () => {
    console.log("🔥: Un utilisateur s'est déconnecté");

    console.log(users);
    users = users.filter((user) => user.socketID !== socket.id);
    let i = 0;
    console.log(users);

    while (i < users.length) {
      if (socket.id == users[i].socketID) {
        sendUsersRoom(users[i].room);
      }
      i++;
    }
    // io.emit("newUserResponse", users);
    socket.disconnect();
  });

  function sendRoomList() {
    const rooms = io.sockets.adapter.rooms;
    const roomList = Array.from(rooms.keys());

    io.emit("roomListResponse", roomList);
  }
});
