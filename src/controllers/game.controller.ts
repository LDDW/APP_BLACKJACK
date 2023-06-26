const fs = require('fs');
import {gameRepository} from "../repository/game.repository";
import {gameRoundRepository} from "../repository/game-round.repository";
import {Game} from "../entities/game.entity";
import {User} from "../entities/user.entity";

class GameController {
    private game;
    private nbDecks;
    private deck;
    private players;
    private nbPlayers;
    private currentPlayerIndex;
    private dealer;
    private started;

    public create(nbDecks = 3) {
        this.game = new Game();
        this.nbDecks = nbDecks;
        this.players = [];
        this.nbPlayers = 0;
        this.currentPlayerIndex = -1;
        this.dealer = {
            name: "Dealer",
            hand: [],
            points: 0,
            isBust: false,
        };

        // Persistance de la partie
        return gameRepository.save(this.game);
    }

    // Lancement d'une partie
    public startGame() {
        this.started = true;
        this.deck = this.createShoe(this.nbDecks);
        this.dealInitialCards();
        this.currentPlayerIndex = 0;
    }

    // Crée le jeu de cartes
    public createShoe(nbDecks) {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
        const deck = [];
        const shoe = [];

        // Crée un deck de 52 cartes
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                const card = {
                    suit: suits[i],
                    value: values[j],
                };
                deck.push(card);
            }
        }

        // Crée le sabot en fonction du nombre de decks choisis
        for (let i = 0; i < nbDecks; i++) {
            shoe.push(...deck);
        }

        // Mélange le jeu de cartes
        for (let i = shoe.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shoe[i], shoe[j]] = [shoe[j], shoe[i]];
        }

        return shoe;
    }

    // Ajoute un joueur à la table
    public addPlayer(idUser: number) {
        // Si la table est complète, on renvoi une erreur
        if (this.players.length >= 7) {
            throw new Error("Maximum number of players reached.");
        }

        // Construit le joueur
        const player = {
            id: idUser,
            hand: [],
            points: 0,
            isBust: false,
        };

        // Et l'ajoute à la liste des joueurs
        this.players.push(player);
        this.nbPlayers = this.players.length();

        // On met à jour la partie
        this.game.nb_players = this.nbPlayers;
        gameRepository.save(this.game);

        return player;
    }

    public removePlayer(idUser: number) {
        const playerIndex = this.players.findIndex(player => player.id === idUser);

        if (playerIndex !== -1) {
            this.players.splice(playerIndex, 1);
            this.nbPlayers = this.players.length;

            // On met à jour la partie
            this.game.nb_players = this.nbPlayers;
            gameRepository.save(this.game);

            return true;
        }

        return false;
    }

    // Distribue les cartes initiales
    public dealInitialCards() {
        // Distribue 2 cartes à chaque joueur et au dealer
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < this.players.length; j++) {
                const player = this.players[j];
                player.hand.push(this.deck.shift());
            }

            this.dealer.hand.push(this.deck.shift());
        }
    }

    public hit() {
        const player = this.players[this.currentPlayerIndex];
        const card = this.deck.pop();

        player.hand.push(card);
        player.points = this.calculatePoints(player.hand);

        if (player.points > 21) {
            player.isBust = true;
            this.stand();
        }
    }

    public stand() {
        if (this.currentPlayerIndex < this.players.length - 1) {
            // Passe au joueur suivant
            this.currentPlayerIndex++;
        } else {
            // Passe au dealer
            this.playDealerTurn();
            this.endRound();
        }
    }

    public playDealerTurn() {
        // this.dealer.points = this.calculatePoints(this.dealer.hand);
        while (this.dealer.points < 17) {
            const card = this.deck.pop();

            this.dealer.hand.push(card);
            this.dealer.points = this.calculatePoints(this.dealer.hand);

            if (this.dealer.points > 21) {
                this.dealer.isBust = true;
                break;
            }
        }
    }

    public endRound() {
        const dealerPoints = this.dealer.points;
        let playersResults = [];
        let activePlayers = [];
        let winner = null;

        for (let i = 0; i < this.players.length; i++) {
            if (!this.players[i].isBust)
                activePlayers.push(this.players[i])
        }

        // On boucle sur tous les joueurs encore actifs
        for (let i = 0; i < activePlayers.length; i++) {
            const player = activePlayers[i];
            const playerPoints = player.points;

            // Determine le gagnant entre le joueur et le dealer
            if (dealerPoints > 21) {
                winner = 'player';
            } else if (playerPoints > dealerPoints) {
                winner = 'player';
            } else if (playerPoints < dealerPoints) {
                winner = 'dealer';
            } else {
                winner = 'push';
            }

            // Calcul les gains
            let gain = null;
            if (winner === 'player') {
                gain = player.bet * 1.5;
            } else if (winner === 'push') {
                gain = player.bet;
            }
            playersResults.push({
                id_player: player.id,
                bet: player.bet,
                points: playerPoints,
                winner: winner,
                gain: gain,
            });

            // On supprime le joueur de la liste des joueurs encore présent dans ce tour
            activePlayers.splice(i, 1);
            i--;
        }

        // Convertir le tableau en chaîne JSON
        const jsonData = JSON.stringify(playersResults, null, 2);
        fs.writeFileSync('playersResults.json', jsonData);

        // Persistance du tour
        this.game.saveRound(jsonData);

        // Retourne le résultat
        return {
            dealerPoints,
            playersResults,
        };
    }


    public calculatePoints(cards) {
        let points = 0;
        let aceCount = 0;

        // Premièrement, on calcule la valeur des cartes autre que les AS
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            let figure = false;
            if (card.value == "J" || card.value == "Q" || card.value == "K") figure = true;

            if (card.value !== 'A') {
                points += figure ? 10 : card.value;
            } else {
                aceCount++;
            }
        }

        // Puis, on calcule la valeur des AS
        while (aceCount > 0) {
            const acePoints = points + 11 <= 21 ? 11 : 1;
            points += acePoints;
            aceCount--;
        }

        return points;
    }

    public isStarted() {
        return this.started;
    }
}

export default new GameController();
