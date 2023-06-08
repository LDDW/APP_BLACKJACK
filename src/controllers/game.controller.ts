import {gameRepository} from "../repository/game.repository";
import {Game} from "../entities/game.entity";

class GameController {

    /**
     * Create a new game
     * @returns {Promise<Game>}
     */
    public create(nbPlayer: number, date: Date) {
        const game = new Game(3);
        game.nb_players = nbPlayer;
        game.date_begin = date;
        game.duration = date;
        return gameRepository.save(game);
    }
}

export default new GameController();
