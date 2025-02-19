const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start(firing) {
    const cards = []
    prototypeQuestions.forEach(card => {
      cards.push(new Card(card.id, card.question, card.answers, card.correctAnswer))
    })
    const deck = new Deck(cards)
    this.currentRound = new Round(deck)
    if(firing){
      this.printMessage(deck)
      this.printQuestion(this.currentRound)
    }
  }
}

module.exports = Game;