const chai = require('chai')
const expect = chai.expect
const Turn = require('../src/Turn')
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
})