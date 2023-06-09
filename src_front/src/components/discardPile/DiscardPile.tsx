import React from 'react';

interface Card {
  rank: string;
  suit: string;
}

interface DiscardPileZoneProps {
  cards: Card[];
}

// const DiscardPileZone = ({ cards }: DiscardPileZoneProps) => {
//   return (
//     <div className="discardPileZone">
//       <div className="deck">
//           <img src={deckImage} alt="Deck" />
//       </div>
//     </div>
//   );
// };

// export default DiscardPileZone;
