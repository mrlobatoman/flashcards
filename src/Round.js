const Turn = require('../src/Turn')

class Round {
    constructor(deck) {
        this.deck = deck,
        this.cardInPlay = this.deck.cards[0],
        this.incorrectGuesses = [],
        this.turns = 0 
    }

    returnCurrentCard() {
        return this.cardInPlay
    }

    takeTurn(guess) {
        let turn = new Turn(guess, this.cardInPlay)
        this.turns += 1
        this.cardInPlay = this.deck.cards[this.turns]
        if(!turn.evaluateGuess) {
            this.incorrectGuesses.push(this.cardInPlay.id)
        } 
        return turn.giveFeedback()
    }
}

module.exports = Round