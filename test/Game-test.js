const chai = require('chai')
const expect = chai.expect
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Game = require('../src/Game')

describe('Game', function() {
    let card1, card2, card3, cards, deck, round, game
    beforeEach(() => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
        card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
        cards = [card1, card2, card3]
        deck = new Deck(cards)
        round = new Round(deck)
        game = new Game()
    })

    it('should be a function', function() {
        expect(Game).to.be.a('function')
    })

    it('should be an instance of game', function() {
        expect(game).to.be.an.instanceOf(Game)
    })

    it('should create card instances when starting new game', function() {
        game.start()
        expect(game.currentRound.deck.cards[0]).to.be.an.instanceOf(Card)
    })

    it('should create new deck instance when starting new game', function() {
        game.start()
        expect(game.currentRound.deck).to.be.an.instanceOf(Deck)
    })

    it('should create an instance of round when starting new game', function() {
        game.start()
        expect(game.currentRound).to.be.an.instanceOf(Round)
    })
})
