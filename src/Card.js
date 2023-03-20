// Each card needs an id, question, and possible answers
// Data file gives properties of id, question, answers, correct answer

class Card {
    constructor(id, question, answers, correctAnswer) {
        this.id = id,
        this.question = question,
        this.answers = answers,
        this.correctAnswer = correctAnswer
    }
}

module.exports = Card
