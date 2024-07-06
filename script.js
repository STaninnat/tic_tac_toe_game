const cells = document.querySelectorAll(".cell")
const statusText = document.querySelector("#statusText")
const restartButton = document.querySelector("#restartButton")
let gameSize = 3

function options(size) {
    const numArrays = size * size
    const optionsList = []
    for (let i = 0; i < numArrays; i++) {
        optionsList.push("")
    }
    return optionsList
}
let option = options(gameSize)
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
    const winCons= firstCondition.concat(secondCondition, thridCondition, fourthCondition)
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
let winCondition = winConditions(gameSize)
//////////////////////////////////////////////////////////////////////////////////////////////////////

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
    for (let i = 0; i < winCondition.length; i++) {
        let gameSet = []
        const condition = winCondition[i]
        for (let i = 0; i < gameSize; i++) {
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
    option = options(gameSize)
    statusText.textContent = (`${currentPlayer}'s turn`)
    cells.forEach(cell => cell.textContent = "")
    running = true
}


/* module.exports = {
    options,
    winConditions
} */