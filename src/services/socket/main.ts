import {io} from '../../../server.api';

import express from 'express';

const http = require("http");
var path = require("path");

const app = express();

const availableRooms = [];


// Lorsqu'un client se connecte à Socket.IO
io.on("connection", (socket) => {
  console.log(`Client connecté : ${socket.id}`);

  // Lorsqu'un client rejoint une salle
  socket.on("joinRoom", (roomId) => {
    console.log(`Client ${socket.id} a rejoint la salle ${roomId}`);

    // Rejoindre la salle
    socket.join(roomId);

    //ajouter la room dans le tableau si elle n'existe pas
    if (!availableRooms.includes(roomId)) {
      availableRooms.push(roomId);
    }
    console.log("availableRooms");
    console.log(availableRooms);
    console.log("availableRooms");

    // Envoyer un message à tous les clients dans la salle (sauf l'utilisateur actuel)
    socket
      .to(roomId)
      .emit("message", `Client ${socket.id} a rejoint la salle ${roomId}`);
  });

  // Lorsqu'un client quitte une salle
  socket.on("leaveRoom", (roomId) => {
    console.log(`Client ${socket.id} a quitté la salle ${roomId}`);

    // Quitter la salle
    socket.leave(roomId);

    // Envoyer un message à tous les clients dans la salle (sauf l'utilisateur actuel)
    socket
      .to(roomId)
      .emit("message", `Client ${socket.id} a quitté la salle ${roomId}`);
  });

  // Lorsqu'un client envoie un message dans une salle
  socket.on("sendMessage", (roomId, message) => {
    console.log(
      `Client ${socket.id} a envoyé un message ${message} dans la salle ${roomId}`
    );

    // Envoyer un message à tous les clients dans la salle (y compris l'utilisateur actuel)
    io.in(roomId).emit("message", message);
  });

  // Lorsqu'un client se déconnecte de Socket.IO
  socket.on("disconnect", () => {
    console.log(`Client déconnecté : ${socket.id}`);
  });
});








// let socketsConected = new Set();
// io.on("connection", onConnected);

// function onConnected(socket) { 

//   console.log("Socket connected", socket.id);


// }



// // Join / create room
// function joinRoom(roomId,socket) {
//   socket.join(roomId);
// }
// // Leave room


// // Leave room when player disconnect 
// function sendToFrontPlayers(data,nom) {
//   io.emit(nom, data);
// }

// function sendToFrontPlayer(data,nom,socket) {
//   socket.emit(nom, data);
// }

// function sendToRoom(roomId,nom,data) {
//   io.to(roomId).emit(nom, data);
// }