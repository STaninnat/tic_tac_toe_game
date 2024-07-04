const {checkWinner} = require('./script.js')
const {test, expect} = require('@jest/globals')

test('checkWinner', () => {
    const input = ''
    const actual = checkWinner()
    const expected = 'something'
    expect(actual).toEqual(expected)
})