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
let options = ["X", "X", "X", "X", "O", "O", "O", "X", "X"]

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
}
checkWinner()
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function optionTotal(num) {
    const numArrays = num * num
    const options = []
    for (let i = 0; i < numArrays; i++) {
        options.push("")
    }
    //console.log(options)
    return options
}
optionTotal(4)
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function winConditions(size) {
    const firstSet = [], secondSet = [], thridSet = [], fourthSet = []
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
    for (let ele of firstCondition) {
        for (let i = 0; i < size; i++) {
            thridSet.push(ele[i])
        } 
    }
    const thridCondition = numSkip(thridSet, size)
    for (let ele of firstCondition) {
        for (let i = (size - 1); i >= 0; i--) {
            fourthSet.push(ele[i])
        }
    }
    const fourthCondition = numSkip(fourthSet, size)
    const winCondition = firstCondition.concat(secondCondition, thridCondition, fourthCondition)
    //console.log(winCondition)
    return winCondition
}

const numSkip = (array, skipSize) => {
    const numList = []
    for (let i = 0; i < array.length; i += skipSize+1) {
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
winConditions(5)
*/
