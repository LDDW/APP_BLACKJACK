import React from 'react';
import deckImage from '../../assets/deckImageReverse.png';
import './DiscardPileZone.css';

const DiscardPileZone = () => {
  return (
    <div className="discardPileZone">
      <div className="deckReverse">
        <img className="deck-img" src={deckImage} alt="Deck" />
      </div>
    </div>
  );
};

export default DiscardPileZone;
