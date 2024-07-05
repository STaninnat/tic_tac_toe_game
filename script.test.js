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
    const expected = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    expect(actual).toEqual(expected)
})

test('winCondition5', () => {
    const input = 5
    const actual = winConditions(input)
    const expected = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20]
      ]
    expect(actual).toEqual(expected)
})

test('winCondition7', () => {
    const input = 7
    const actual = winConditions(input)
    const expected = [
        [0, 1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12, 13],
        [14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27],
        [28, 29, 30, 31, 32, 33, 34],
        [35, 36, 37, 38, 39, 40, 41],
        [42, 43, 44, 45, 46, 47, 48],
        [0, 7, 14, 21, 28, 35, 42],
        [1, 8, 15, 22, 29, 36, 43],
        [2, 9, 16, 23, 30, 37, 44],
        [3, 10, 17, 24, 31, 38, 45],
        [4, 11, 18, 25, 32, 39, 46],
        [5, 12, 19, 26, 33, 40, 47],
        [6, 13, 20, 27, 34, 41, 48],
        [0, 8, 16, 24, 32, 40, 48],
        [6, 12, 18, 24, 30, 36, 42]
      ]
    expect(actual).toEqual(expected)
})

