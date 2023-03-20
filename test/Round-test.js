const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Round', function() {
    let card1, card2, card3, cards, deck, round
    beforeEach(() => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
        card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
        cards = [card1, card2, card3]
        deck = new Deck(cards)
        round = new Round(deck)
    })

    it('should be a function', function() {
        expect(Round).to.be.a('function')
    })

    it('should be an instance of round', function() {
        expect(round).to.be.an.instanceOf(Round)
    })

    it('should be able to store a deck', function() {
        expect(round.deck).to.equal(deck)
    })

    it('should store the first card of the cards array', function() {
        expect(round.cardInPlay).to.equal(card1)
    })

    it('should start with an empty array of incorrect guesses', function() {
        expect(round.incorrectGuesses).to.deep.equal([])
    })

    it('should start with zero turns taken', function() {
        expect(round.turns).to.equal(0)
    })

    it('returnCurrentCard should return card in play', function() {
        expect(round.returnCurrentCard()).to.equal(card1)
    })

    it('takeTurn should return feeback to user based on their guess', function() {
        expect(round.takeTurn('object')).to.equal('correct!')
        expect(round.takeTurn('triangle')).to.equal('incorrect!')
    })
})