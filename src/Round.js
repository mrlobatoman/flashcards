class Round {
    constructor(deck) {
        this.deck = deck,
        this.cardInPlay = this.deck.cards,
        this.incorrectGuesses = [],
        this.turns = 0 
    }

    returnCurrentCard() {
        return this.cardInPlay
    }

    takeTurn() {
// call upon the Turn class to take in user guess
// if guess is incorrect, store the id into this.incorrectGuesses
// return feedback
// new instance of card with next card being next in array
// need to ++ to this.turns anytime function invoked

    }


}

module.exports = Round