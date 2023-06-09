import express from 'express';
import * as console from "console";
import gameController from "../src/controllers/game.controller";
import {gameRepository} from "../src/repository/game.repository";
const gameRouter = express.Router();

/**
 * Create a new game
 * @param {number} nbPlayer
 * @param {Date} date
 * @returns {Promise<Game>}
 */
gameRouter.post('/create', (req, res, next) => {
    /* let nbPlayer;
    let date;
    console.log(req.body.nbPlayer);
    if (!req.body.nbPlayer) {
        console.log("Error: missing parameters");
        return res.send("Error: missing parameters").status(400);
    }
    date = req.body.date ? req.body.date : new Date();
    nbPlayer = req.body.nbPlayer; */
    gameController.create(3).then(r => {
        console.log(r);
        res.send(r).status(200);
    }).catch(e => {
        console.log(e);
        res.send(e).status(400);
    })
});

/**
 * Get a game
 * @param {number} id
 * @returns {Promise<Game>}
 */
gameRouter.get('/:id', (req, res, next) => {
    let id;
    if (!req.params.id) {
        console.log("Error: missing parameters");
        return res.send("Error: missing parameters").status(400);
    }
    gameRepository.get(id).then(r => {
        console.log(r);
        res.send({game: r}).status(200);
    }).catch(e => {
        console.log(e);
        res.send(e).status(400);
    })
});

export default gameRouter;
