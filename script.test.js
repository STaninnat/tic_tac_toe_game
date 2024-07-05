/**
 * @jest-environment jsdom
 */

const { options, winConditions } = require('./script.js')
//const {numSkip} = require('./noteforme.js')
const { test, expect } = require('@jest/globals')

test('options3', () => {
    const input = 3
    const actual = options(input)
    const expected = ["", "", "", "", "", "", "", "", ""]
    expect(actual).toEqual(expected)
})

test('options5', () => {
    const input = 5
    const actual = options(input)
    const expected = ["", "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    expect(actual).toEqual(expected)
})

test('options7', () => {
    const input = 7
    const actual = options(input)
    const expected = ["", "", "", "", "", "", "", "", "", "", "", 
        "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 
        "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 
        "", "", "", "", "", "", "", ""]
    expect(actual).toEqual(expected)
})

test('winCondition3', () => {
    const input = 3
    const actual = winConditions(input)
    const expected = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    expect(actual).toEqual(expected)
})


