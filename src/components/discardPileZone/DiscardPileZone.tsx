import React from 'react';
// import DiscardPileZone from '../discardPile/DiscardPile';
// Image de deck hypothétique, vous pouvez la remplacer par votre propre image
import deckImage from '../../assets/deckImageReverse.png';
import './DiscardPileZone.css';



const DiscardPileZone = () => {
  return (
      <div className="discardPileZone">
          <div className="deckReverse">
              <img src={deckImage} alt="Deck" />
          </div>
      </div>
  );
};

export default DiscardPileZone;
