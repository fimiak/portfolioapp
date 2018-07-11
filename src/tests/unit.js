/*
export const sum = (a, b) => {
  return a + b;
};
*/
/* 
  Create a deck of cards
  Randomize deck
  sort deck
  Take one card from deck
*/

class Cards {
  constructor(cards) {
    this.deck = cards;
  }

  createCard(id, value, suite) {
    let Obj = {};
    Obj.id = id;
    Obj.value = value;
    Obj.suite = suite;
    return Obj;
  }

  createDeck() {
    let cards = [];
    let y = 0;
    let z = 0;
    for (let i = 0; i < 52; i++) {
      if (y > 12) {
        y = 0;
        z += 1;
      }
      y++;
      let newCard = createCard(i, y, z);
      cards.push(newCard);
    }
  }

  get pick() {
    return this.pickCard();
  }

  pickCard(arg) {
    if (arg) {
      return cards[arg];
    } else {
      return cards[Math.floor(Math.random() * 52)];
    }
  }
}

const deck = new Cards();
/* Shuffle
let shuffled = [];
let shuffledCards = cards.map(item => {
  item.id % 2 === 0 ? shuffled.push(item) : shuffled.unshift(item);
});
*/
console.log(deck.pick);
console.log(shuffled);
