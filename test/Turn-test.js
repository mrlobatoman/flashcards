const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', function() {
    let card1, turn
    beforeEach(() => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        turn = new Turn()
    })

    it('should be a function', function() {
        expect(Turn).to.be.a('function')
    })

    it('should be an instance of Turn', function() {
        turn = new Turn()
        expect(turn).to.be.an.instanceOf(Turn)
    })

    it('should store a user guess', function() {
        turn = new Turn('array')
        expect(turn.userGuess).to.equal('array')
    })

    it('should store a card object', function() {
        turn = new Turn('array', card1)
        expect(turn.currentCard).to.equal(card1)
    })

    it('returnGuess should return string of users guess', function() {
        turn = new Turn('array')
        expect(turn.returnGuess()).to.equal('array')
    })

    it('returnCard should resturn an object of a card', function() {
        turn = new Turn('array', card1)
        expect(turn.returnCard()).to.equal(card1)
    })

    it('evaluateGuess should return a boolean', function() {
        turn = new Turn('object', card1)
        expect(turn.evaluateGuess()).to.equal(true)

        turn = new Turn('array', card1)
        expect(turn.evaluateGuess()).to.equal(false)
    })

    it('giveFeedback should return a string based of the conditional in evaluateGuess', function() {
        turn = new Turn('object', card1)
        expect(turn.giveFeedback()).to.equal('correct!')

        turn = new Turn('array', card1)
        expect(turn.giveFeedback()).to.equal('incorrect!')
    })

})