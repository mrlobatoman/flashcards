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
        const turn = new Turn()
        expect(turn).to.be.an.instanceOf(Turn)
    })

    it('should store a user guess', function() {
        const turn = new Turn('array')
        expect(turn.userGuess).to.equal('array')
    })

    it('should store a card object', function() {
        turn = new Turn('array', card1)
        expect(turn.currentCard).to.equal(card1)
    })


})