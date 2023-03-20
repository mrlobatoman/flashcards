class Turn {
    constructor(userGuess, currentCard) {
        this.userGuess = userGuess,
        this.currentCard = currentCard
    }
// create a method that will return the users guess when invoked
// when creating a new instance of turn, the userGuess will be user input and is
    // assigned to the userGuess property

    returnGuess() {
        this.userGuess
    }

    returnCard() {
        this.currentCard
    }

}

module.exports = Turn