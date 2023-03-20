class Round {
    constructor(deck) {
        this.deck = deck,
        this.cardInPlay = this.deck.cards,
        this.incorrectGuesses = [],
        this.turns = 0 
    }
}

module.exports = Round