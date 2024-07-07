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

/* const winConditions = [
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
checkWinner(3) */
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

    let thirdSkiparr = size - 3 // for third & fourth con
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

//fourwinConditions(7)

/* [
  [0, 1, 2, 3],     [1, 2, 3, 4],
  [5, 6, 7, 8],     [6, 7, 8, 9],
  [10, 11, 12, 13], [11, 12, 13, 14],
  [15, 16, 17, 18], [16, 17, 18, 19],
  [20, 21, 22, 23], [21, 22, 23, 24],
  [0, 5, 10, 15],   [5, 10, 15, 20],
  [1, 6, 11, 16],   [6, 11, 16, 21],
  [2, 7, 12, 17],   [7, 12, 17, 22],
  [3, 8, 13, 18],   [8, 13, 18, 23],
  [4, 9, 14, 19],   [9, 14, 19, 24],
  [0, 6, 12, 18],   [6, 12, 18, 24],
  [1, 7, 13, 19],   [5, 11, 17, 23],
  [4, 8, 12, 16],   [8, 12, 16, 20],
  [3, 7, 11, 15],   [9, 13, 17, 21]
] */

/* [
  [0, 1, 2, 3],     [1, 2, 3, 4],     [2, 3, 4, 5],     [3, 4, 5, 6],
  [7, 8, 9, 10],    [8, 9, 10, 11],   [9, 10, 11, 12],  [10, 11, 12, 13],
  [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
  [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
  [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
  [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
  [42, 43, 44, 45], [43, 44, 45, 46], [44, 45, 46, 47], [45, 46, 47, 48],
  [0, 7, 14, 21],   [7, 14, 21, 28],  [14, 21, 28, 35], [21, 28, 35, 42],
  [1, 8, 15, 22],   [8, 15, 22, 29],  [15, 22, 29, 36], [22, 29, 36, 43],
  [2, 9, 16, 23],   [9, 16, 23, 30],  [16, 23, 30, 37], [23, 30, 37, 44],
  [3, 10, 17, 24],  [10, 17, 24, 31], [17, 24, 31, 38], [24, 31, 38, 45],
  [4, 11, 18, 25],  [11, 18, 25, 32], [18, 25, 32, 39], [25, 32, 39, 46],
  [5, 12, 19, 26],  [12, 19, 26, 33], [19, 26, 33, 40], [26, 33, 40, 47],
  [6, 13, 20, 27],  [13, 20, 27, 34], [20, 27, 34, 41], [27, 34, 41, 48],
  [0, 8, 16, 24],   [8, 16, 24, 32],  [16, 24, 32, 40], [24, 32, 40, 48],
  [1, 9, 17, 25],   [9, 17, 25, 33],  [17, 25, 33, 41], [2, 10, 18, 26],
  [10, 18, 26, 34], [3, 11, 19, 27],  [7, 15, 23, 31],  [15, 23, 31, 39],
  [23, 31, 39, 47], [14, 22, 30, 38], [22, 30, 38, 46], [21, 29, 37, 45],
  [6, 12, 18, 24],  [12, 18, 24, 30], [18, 24, 30, 36], [24, 30, 36, 42],
  [5, 11, 17, 23],  [11, 17, 23, 29], [17, 23, 29, 35], [4, 10, 16, 22],
  [10, 16, 22, 28], [3, 9, 15, 21],   [13, 19, 25, 31], [19, 25, 31, 37],
  [25, 31, 37, 43], [20, 26, 32, 38], [26, 32, 38, 44], [27, 33, 39, 45]
] */