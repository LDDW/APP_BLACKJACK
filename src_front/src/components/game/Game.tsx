import React from 'react';

import DealerZone from '../dealerZone/DealerZone';
import DiscardPileZone from '../discardPileZone/DiscardPileZone';
import ChipZone from "../chipZone/ChipZone";
import RuleZone from "../ruleZone/RuleZone";
import PlayerZone from "../playerZone/PlayerZone";
import BetZone from '../betZone/BetZone';

// Récupération du noms/ids des joueurs passé en props de ChipZone
const players = [
    { id: 1, 'pseudo': 'The-Cyril5555' },
    { id: 2, 'pseudo': 'Neksooo' },
    { id: 3, 'pseudo': 'Senshi' },
];
const playerNames = ["The-Jules6666", "Pierre", "Paul", "Jacques", "Sophie", "Marie", "Louise"];
// Récupération du status du joueur passé en props de PlayerZone
const playerStatuses = ["not-played", "not-played", "playing", "not-played", "played", "not-played", "not-played"]; // Exemple de statuts


const Game = () => {
    return(
            <div className="App" >
                <header className="App-header">
                    <DealerZone />
                    <DiscardPileZone />

                    <ChipZone players={players}/>
                    <PlayerZone playerNames={playerNames} playerStatuses={playerStatuses}/>
                    <BetZone minValue={2} />
                    <RuleZone />
                </header>
            </div>
        )
}

export default Game;
