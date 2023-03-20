class Turn {
    constructor(userGuess, currentCard) {
        this.userGuess = userGuess,
        this.currentCard = currentCard
    }
// create a method that will return the users guess when invoked
// when creating a new instance of turn, the userGuess will be user input and is
    // assigned to the userGuess property

    returnGuess() {
        return this.userGuess
    }

    returnCard() {
        return this.currentCard
    }
// Create a method that returns a boolean indicating the if the 
    // userGuess === card.correctAnswer
    evaluateGuess() {
        return this.userGuess === this.currentCard.correctAnswer
    }

    giveFeedback() {
        if(this.evaluateGuess()) {
            return `correct!`
        } else {
            return `incorrect!`
        }
    }
}

module.exports = Turn