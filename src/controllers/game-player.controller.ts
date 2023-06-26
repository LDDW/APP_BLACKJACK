import {GamePlayer} from "../entities/game-player.entity";
import {myDataSource} from "../../data-source";
import {User} from "../entities/user.entity";
import {Game} from "../entities/game.entity";

class GamePlayerController {
    public constructor() {

    }

    /**
     * Create a new game player association
     * @param user
     * @param game
     * @returns {Promise<GamePlayer>}
     */
    public create(user: User, game: Game) {
        const gamePlayer = new GamePlayer();
        gamePlayer.game = game;
        gamePlayer.user = user;
        return myDataSource.manager.save(gamePlayer);
    }

    delete(game: Game, user: User) {
        return myDataSource.manager.delete(GamePlayer, {
            game: game,
            user: user
        });
    }
}

export default new GamePlayerController()
