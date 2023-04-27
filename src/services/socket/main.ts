import {io} from '../../../server.api';
import express from 'express';


let salon = [];
let playeronline = [];

function onConnected(socket) {

    socket.on("start", async function () {
        // Room du joueur qui à lancé !
        let roomsplayer = Object.keys(socket.rooms);
        // Tous les joueurs de la room !
        let playersinroom = await getplayerfromroom(roomsplayer[1]);
    
        let txtlistenemy = roomsplayer[1];
    
        listenemy.push({
          nameroom: txtlistenemy,
          manche: 1,
          ennemy: [],
          intervals: [],
          intervalss: [],
        });
    
        let i = 0;
        while (i < salon.length) {
          if (salon[i] == roomsplayer[1]) salon.splice([i], 1);
          i++;
        }
    
        io.to(roomsplayer[1]).emit("addplayerfront", playersinroom);
        io.to(roomsplayer[1]).emit("close-movement", roomsplayer[1]);
    
        // Ajoute les joueurs au front
    
        mancheinfini(socket, playersinroom, roomsplayer[1]);
      });


socket.on("showsalon", (data) => {
    socket.emit("showsalon", salon);
  });
  socket.on("createsalon", (data) => {
    if (salon.length == 0) {
      salon.push(data);
    } else {
      let i = 0;
      while (i < salon.length) {
        if (data != salon[i]) {
          salon.push(data);
        }
        i++;
      }
    }

    socket.emit("showsalon", salon);
  });

  socket.on("joinsalon", (data) => {
    let playersinroom = [];

    socket.join(data, function () {
      io.in(data).clients((err, clients) => {
        let i = 0;
        while (i < playeronline.length) {
          let x = 0;
          while (x < clients.length) {
            if (playeronline[i].idjoueur == clients[x]) {
              playeronline[i].room = data;
              playersinroom.push(playeronline[i]);
            }
            x++;
          }

          i++;
        }

        io.to(data).emit("salonplayer", playersinroom);
      });
    });
  })

}


function getplayerfromroom(string) {
    let playersinroom = [];
    io.in(string).clients((err, clients) => {
      let i = 0;
      while (i < playeronline.length) {
        let x = 0;
        while (x < clients.length) {
          if (clients[x] == playeronline[i].idjoueur) {
            playersinroom.push(playeronline[i]);
          }
          x++;
        }
        i++;
      }
    });
  
    return playersinroom;
  }