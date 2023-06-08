import {Column, Entity, OneToMany, PrimaryGeneratedColumn,} from "typeorm";
import {GamePlayer} from "./game-player.entity";
import {userRepository} from "../repository/user.repository";
import * as console from "console";
import {myDataSource} from "../../data-source";


@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nb_players: number;

    @Column({type: "datetime"})
    date_begin: Date;

    @Column({type: "timestamp"})
    duration: Date;


    @OneToMany(() => GamePlayer, gamePlayer => gamePlayer.game)
    gamePlayers: GamePlayer[];

    // async getPlayers() {
    //     let users = [];
    //     for (const gamePlayer of this.gamePlayers) {
    //         let userId = gamePlayer.userId;
    //         let user = userRepository.get(userId);
    //         console.log(user);
    //         users.push(user);
    //     }
    //
    //     return users;
    // }

    public deck;
    public players;
    public currentPlayerIndex;
    public dealer;

    constructor(idGame, nbDecks = 3) {
        this.id = idGame;
        this.deck = this.createShoe(nbDecks);
        this.players = [];
        this.currentPlayerIndex = -1;
        this.dealer = {
            name: "Dealer",
            hand: [],
            points: 0,
            isBust: false,
        };

        // TEST
        // console.log("Le sabot contient " + this.deck.length + " cartes");
        // console.log(this.deck);
        // ENDTEST
    }

    // Crée le jeu de cartes
    createShoe(nbDecks) {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        //const suits = ['♥️', '♦️', '♣️', '♠️'];
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
    addPlayer(id) {
        // Si la table est complète, on renvoi une erreur
        if (this.players.length >= 7) {
            throw new Error("Maximum number of players reached.");
        }

        // Construit le joueur
        const player = {
            id: id,
            hand: [],
            points: 0,
            isBust: false,
        };

        // Et l'ajoute à la liste des joueurs
        this.players.push(player);
        this.nb_players = this.players.length();

        // TEST
        // console.log(player["id"] + " vient de s'assoir à la table");
        // console.log("Il y a " + this.players.length + " joueurs");
        // ENDTEST
    }

    // Lancement d'une partie
    startGame() {
        this.dealInitialCards();
        this.currentPlayerIndex = 0;
        this.date_begin = new Date();
    }

    // Distribue les cartes initiales
    dealInitialCards() {
        // Distribue 2 cartes à chaque joueur et au dealer
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < this.players.length; j++) {
                const player = this.players[j];
                player.hand.push(this.deck.shift());
            }

            this.dealer.hand.push(this.deck.shift());
        }

        // TEST
        // let points = 0;
        // console.log("\nDistribution des cartes:");
        // this.players.forEach(player => {
        //     player.points = this.calculatePoints(player.hand);
        //     points = player.points;
        //     if (points == 21) points = "BLACKJACK";
        //     console.log(player.id + ": " + player.hand[0]["value"] + " " + player.hand[0]["suit"] + " " + player.hand[1]["value"] + " " + player.hand[1]["suit"] + " (" + points + ")");
        // });

        // this.dealer.points = this.calculatePoints(this.dealer.hand);
        // points = this.dealer.points;
        // if (points == 21) points = "BLACKJACK";
        // console.log("Dealer: " + this.dealer.hand[0]["value"] + " " + this.dealer.hand[0]["suit"] + " " + this.dealer.hand[1]["value"] + " " + this.dealer.hand[1]["suit"] + " (" + points + ")");
        // ENDTEST
    }

    hit() {
        const player = this.players[this.currentPlayerIndex];
        const card = this.deck.pop();

        player.hand.push(card);
        player.points = this.calculatePoints(player.hand);

        if (player.points > 21) {
            player.isBust = true;
            this.stand();
        }
    }

    stand() {
        if (this.currentPlayerIndex < this.players.length - 1) {
            // Passe au joueur suivant
            this.currentPlayerIndex++;
        } else {
            // Passe au dealer
            this.playDealerTurn();
            this.endRound();
        }
    }

    playDealerTurn() {
        // this.dealer.points = this.calculatePoints(this.dealer.hand);
        while (this.dealer.points < 17) {
            const card = this.deck.pop();

            this.dealer.hand.push(card);
            this.dealer.points = this.calculatePoints(this.dealer.hand);

            // TEST
            // console.log("Le dealer pioche: "+card["value"]+" "+card["suit"]);
            // let text = "Dealer: ";
            // this.dealer.hand.forEach(card => {
            //      text += card["value"]+" "+card["suit"]+" ";
            // });

            // console.log(text+"("+this.dealer.points+")");
            // ENDTEST

            if (this.dealer.points > 21) {
                this.dealer.isBust = true;
                break;
            }
        }
        // TEST
        // if (this.dealer.isBust) console.log("Dealer: burst ("+this.dealer.points+")");
        // ENDTEST
    }

    endRound() {
        const dealerPoints = this.dealer.points;
        let playerResults = [];
        let activePlayers = [];
        let winner = null;

        let text = "Winners: ";

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
                // TEST
                //text += " "+player.id;
                // ENDTEST
            }

            // Calcul les gains
            let result = null;
            if (winner === 'player') {
                result = player.bet * 1.5;
                // TEST
                //text += " "+player.id;
                // ENDTEST
            } else if (winner === 'push') {
                result = player.bet;
            }
            playerResults.push({
                id_player: player.id,
                bet: player.bet,
                points: playerPoints,
                winner,
                result,
            });

            // On supprime le joueur de la liste des joueurs encore présent dans ce tour
            activePlayers.splice(i, 1);
            i--;
        }

        // TEST
        // if (winner == "dealer") text += winner;
        // else if (winner == "push") text += "dealer";
        // console.log(text);
        // ENDTEST

        // Retourne le résultat
        return {
            dealerPoints,
            playerResults,
        };
    }


    calculatePoints(cards) {
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
}
