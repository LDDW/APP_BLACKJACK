import React from 'react';

import CroupierZone from './components/croupierZone/CroupierZone';
import PlayerZone from './components/playerZone/PlayerZone';
import ShoeZone from './components/shoeZone/ShoeZone';
import DiscardPileZone from './components/discardPileZone/DiscardPileZOne';
import ChipZone from './components/chipZone/ChipZone';
import RuleZone from './components/ruleZone/RuleZone';

const Game = () => {
    return(
            <div className="App" >
                <header className="App-header">
                    <CroupierZone />
                    {/* <PlayerZone /> */}
                    <ShoeZone />
                    <DiscardPileZone />
                    <ChipZone />
                    <RuleZone />
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
}

export default Game;
