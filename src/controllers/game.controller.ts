import {Game} from "../entities/game.entity";
import {User} from "../entities/user.entity";
import gamePlayerController from "./game-player.controller";
import {gameRepository} from "../repository/game.repository";

class GameController {

    constructor() {
    }

    /**
     * Create a new game
     * @returns {Promise<Game>}
     */
    public create(nbPlayer: number, date: Date) {
        const game = new Game();
        game.nb_players = nbPlayer;
        game.date_begin = date;
        game.duration = date;
        return gameRepository.save(game);
    }
}

export default new GameController()
