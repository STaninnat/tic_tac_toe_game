/*
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let options = ["", "", "", "", "", "", "", "", ""]

function checkWinner() {
    let roundWon = false
    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]
        console.log(cellA, cellB, cellC)
        if (cellA == "" || cellB == "" || cellC == "") {
            continue
        } if (cellA == cellB && cellB == cellC) {
            roundWon = true
            break
        }
    }
    if (roundWon) {
        statusText.textContent = (`${currentPlayer} WIN!`)
    } else if (!options.includes("")) {
        statusText.textContent = (`DRAW!`)
    } else {
        changePlayer()
    }
}
checkWinner()
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* function options(size) {
    const numArrays = size * size
    const optionsList = []
    for (let i = 0; i < numArrays; i++) {
        optionsList.push("")
    }
    //console.log(options)
    return optionsList
}
optionTotal(4) */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* function winConditions(size) {
    const firstSet = [], secondSet = [], thridSet = [], fourthSet = []
    const lengthArray = size * size
    for (let i = 0; i < lengthArray; i++) {
       firstSet.push(i)
    }
    const firstCondition = numSlice(firstSet, size)
    //console.log(firstCondition)
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            secondSet.push(firstCondition[j][i])
        }
    }
    const secondCondition = numSlice(secondSet, size)
    //console.log(secondCondition)
    const thridCondition = numSkip(firstSet, size)
    //console.log(thridCondition)
    for (let ele of firstCondition) {
        for (let i = (size - 1); i >= 0; i--) {
            fourthSet.push(ele[i])
        }
    }
    const fourthCondition = numSkip(fourthSet, size)
    const winCondition = firstCondition.concat(secondCondition, thridCondition, fourthCondition)
    console.log(winCondition)
    //return winCondition
}

const numSkip = (array, skipSize) => {
    const numList = []
    for (let i = 0; i < array.length; i += skipSize + 1) {
        numList.push(array[i])
    }
    return [numList]
}

const numSlice = (array, chunksize) => {
    const numList = []
    for (let i = 0; i < array.length; i += chunksize) {
        numList.push(array.slice(i, i + chunksize))
    }
    return numList
}
winConditions(7) */
///////
/* const numSlice = (array, chunkSize) => {
    const numList = []
    const copyArray = Array.from(array)
    while (copyArray.length > 0) {
        numList.push(copyArray.splice(0, chunkSize));
    }
    return numList
}*/
//////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let options = ["X", "X", "O", "O", "O", "O", "X", "O", "X"]

function checkWinner(size) {
    let gameWon = false
    for (let i = 0; i < winConditions.length; i++) {
        const test = []
        const condition = winConditions[i]
        for (let i = 0; i < size; i++) {
            test.push(options[condition[i]])
        }
        console.log(test)
        if (test.includes("")) {
            continue
        } 
        const allEqual = test => test.every( v => v === test[0] )
        if (allEqual(test)) {
            gameWon = true
            console.log('win')
            break
        }
    }
}
checkWinner(3)
/* function checkWinner() {
    let roundWon = false
    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]
        if (cellA == "" || cellB == "" || cellC == "") {
            continue
        } if (cellA == cellB && cellB == cellC) {
            roundWon = true
            break
        }
    }
} */

/* function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
} */

/* module.exports = {
    numSkip
} */