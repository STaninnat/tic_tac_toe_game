//import { JSDOM } from 'jsdom'

const cells = document.querySelectorAll(".cell, .cellf, .cells")
const statusText = document.querySelector("#statusText")
const ruleText = document.querySelector("#ruleText")
const restartButton = document.querySelector("#restartButton")

document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', function() {
        localStorage.clear();
    });
});

const value = localStorage.getItem('gameSize');
let numValue = value

function options(size) {
    const numArrays = size * size
    const optionsList = []
    for (let i = 0; i < numArrays; i++) {
        optionsList.push("")
    }
    //console.log(optionsList)
    return optionsList
   
}
let option = options(numValue)
///////////////////////////////////////////////////////////////////////////////////////////////////
function winConditions(size) {
    const firstSet = [], secondSet = [], fourthSet = []
    const lengthArray = size * size
    for (let i = 0; i < lengthArray; i++) {
        firstSet.push(i)
    }
    const firstCondition = numSlice(firstSet, size)
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            secondSet.push(firstCondition[j][i])
        }
    }
    const secondCondition = numSlice(secondSet, size)
    const thridCondition = numSkip(firstSet, size)
    for (let ele of firstCondition) {
        for (let i = (size - 1); i >= 0; i--) {
            fourthSet.push(ele[i])
        }
    }
    const fourthCondition = numSkip(fourthSet, size)
    const winCons= firstCondition.concat(secondCondition, /* thridCondition, */ fourthCondition)
    console.log(winCons)
    return winCons
}

const numSkip = (array, skipSize) => {
    const numList = []
    for (let i = 0; i < array.length; i += skipSize + 1) {
        numList.push(array[i])
    }
    return [numList]
}

const numSlice = (array, chunkSize) => {
    const numList = []
    const copyArray = Array.from(array)
    while (copyArray.length > 0) {
        numList.push(copyArray.splice(0, chunkSize));
    }
    return numList
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function fourwinConditions(size){
    const winCond = 4
    const tableSize = size * size
    const firststepArray = size - 3
    const secondstepArray = size - winCond
    const firstcondArray = [], secondcondArray = [], thirdcondArray = [], fourthcondArray = []

    for (let i = 0; i < tableSize; i += size) { 
        let firstnumArray = i
        for (let j = 0; j < firststepArray; j++) {
            let insidefirstArray = []
            insidefirstArray.push(firstnumArray, firstnumArray + 1, firstnumArray + 2, firstnumArray + 3)
            firstcondArray.push(insidefirstArray)
            firstnumArray += 1
        }
    }
 
    for (let i = 0; i < size; i++) {
        let secondnumArray = i
        for (let j = 0; j < firststepArray; j++) { 
            let insidesecondArray = []
            insidesecondArray.push(secondnumArray, secondnumArray + size, secondnumArray + (size * 2), secondnumArray + (size * 3))
            secondcondArray.push(insidesecondArray)
            secondnumArray += size
        }
    }

    let thirdSkiparr = size - 3 // for third & fourth cond
    for (let i = 0; i < firststepArray; i++){
        let thirdnumArray = i
        for (let j = 0; j < thirdSkiparr; j++) {
            let insidethirdArray = []
            insidethirdArray.push(thirdnumArray, thirdnumArray + (size + 1), thirdnumArray + ((size + 1) * 2), thirdnumArray + ((size + 1) * 3))
            thirdcondArray.push(insidethirdArray)
            thirdnumArray += (size + 1)
        }
        thirdSkiparr -= 1
    }
    const thirdslice = thirdcondArray.slice(-1)[0]
    const thirdfirstarr = thirdslice.map(a => a + winCond)
    if (size == 5) {
        thirdcondArray.push(thirdfirstarr)
    } else if (size == 7) {
        thirdcondArray.push(thirdfirstarr)
        let newthirdfirstarr = thirdfirstarr
        for (let i = 0; i < (secondstepArray - 1); i++) {
            let newFarray = newthirdfirstarr.map(a => a + (size + 1))
            thirdcondArray.push(newFarray)
            newthirdfirstarr = newFarray
        }
        const thirdsecondarr = thirdfirstarr.map(a => a + size)
        thirdcondArray.push(thirdsecondarr)
        let newthirdsecarr = thirdsecondarr
        for (let i = 0; i < (secondstepArray - 2); i++) {
            let newSarray = newthirdsecarr.map(a => a + (size + 1))
            thirdcondArray.push(newSarray)
            newthirdsecarr = newSarray
        }
        const newslice = thirdcondArray.slice(-1)[0]
        const thirdthirdarr = newslice.map(a => a - 1)
        thirdcondArray.push(thirdthirdarr)
    }

    let fourthSkiparr = size - 3
    for (let i = (size - 1); i >= 3; i--){
        let fourthnumArray = i
        for (let j = 0; j < fourthSkiparr; j++) {
            let insidefourthArray = []
            insidefourthArray.push(fourthnumArray, fourthnumArray + (size - 1), fourthnumArray + ((size - 1) * 2), fourthnumArray + ((size - 1) * 3))
            fourthcondArray.push(insidefourthArray)
            fourthnumArray += (size - 1)
        }
        fourthSkiparr -= 1
    }
    const fourthslice = fourthcondArray.slice(-1)[0]
    const fourthfirstarr = fourthslice.map(a => a + (winCond + 6))
    if (size == 5) {
        const fourarr = fourthslice.map(a => a + 6)
        fourthcondArray.push(fourarr)
    } else if (size == 7) {
        fourthcondArray.push(fourthfirstarr)
        let newfourthfirstarr = fourthfirstarr
        for (let i = 0; i < (secondstepArray - 1); i++) {
            let newFarray = newfourthfirstarr.map(a => a + (size - 1))
            fourthcondArray.push(newFarray)
            newfourthfirstarr = newFarray
        }
        const fourthsecondarr = fourthfirstarr.map(a => a + size)
        fourthcondArray.push(fourthsecondarr)
        let newfourthsecarr = fourthsecondarr
        for (let i = 0; i < (secondstepArray - 2); i++) {
            let newSarray = newfourthsecarr.map(a => a + (size - 1))
            fourthcondArray.push(newSarray)
            newfourthsecarr = newSarray
        }
        const newslice = fourthcondArray.slice(-1)[0]
        const fourththirdarr = newslice.map(a => a + 1)
        fourthcondArray.push(fourththirdarr)
    }
    const fourwinCondition = firstcondArray.concat(secondcondArray, thirdcondArray, fourthcondArray)
    return fourwinCondition
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
let winCondition
if (numValue == 3) {
    winCondition = winConditions(numValue)
} else if (numValue == 5 || numValue == 7) {
    winCondition = fourwinConditions(numValue)
}

let currentPlayer = "X"
let running = false

startGame()

function startGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    restartButton.addEventListener("click", restartGame)
    statusText.textContent = (`${currentPlayer}'s turn`)
    running = true
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex")
    if (option[cellIndex] != "" || !running) { //do nothing
        return
    }
    updateCell(this, cellIndex)
    checkWinner()
}

function updateCell(cell, index) {
    option[index] = currentPlayer //updating placeholder
    cell.textContent = currentPlayer
}

function changePlayer() {
    if (currentPlayer == "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
    statusText.textContent = (`${currentPlayer}'s turn`)
}

function checkWinner() {
    let gameWon = false
    let checkarr
    if (numValue == 3) {
        checkarr = 3
    } else if (numValue == 5 || numValue == 7) {
        checkarr = 4
    }
    for (let i = 0; i < winCondition.length; i++) {
        let gameSet = []
        const condition = winCondition[i]
        for (let i = 0; i < checkarr; i++) {
            gameSet.push(option[condition[i]])
        }
        if (gameSet.includes("")) {
            continue
        } 
        const allEqual = gameSet => gameSet.every(v => v === gameSet[0])
        if (allEqual(gameSet)) {
            gameWon = true
            break
        }
    }

    if (gameWon) {
        statusText.textContent = (`${currentPlayer} WIN!`)
        running = false;
    } else if (!option.includes("")) {
        statusText.textContent = (`DRAW!`)
        running = false
    } else {
        changePlayer()
    }
}

function restartGame() {
    currentPlayer = "X"
    option = options(numValue)
    statusText.textContent = (`${currentPlayer}'s turn`)
    cells.forEach(cell => cell.textContent = "")
    running = true
}


/* module.exports = {
    options,
    winConditions,
    fourwinConditions
} */