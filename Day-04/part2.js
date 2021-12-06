const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay4')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()
  const arrayInput = stringInput.split(/\n\s*\n/)

  let [winNumbers, ...boards] = arrayInput

  winNumbers = winNumbers.split('\r').join('').split(',')

  boards = boards.map((board) => {
    return board.split(/\r\n|\r|\n/)
  })

  boards.forEach((board) => {
    for (i = 0; i < board.length; i++) {
      board[i] = board[i].trim().split(/\s+/).join(' ').split(' ')
      if (board[5]) {
        board.pop()
      }
    }
  })

  let checkIfWinningLine = (array) => {
    let acc = 0
    for (i = 0; i < array.length; i++) {
      if (array[i] === '#') {
        acc++
      }
    }
    if (acc === array.length) {
      return true
    } else return false
  }

  let winningBoards = []
  let bingoNumbers = []
  let indexes = []

  for (let winNumber = 0; winNumber < winNumbers.length; winNumber++) {
    for (let board = boards.length - 1; board >= 0; board--) {
      for (let line = 0; line < boards[board].length; line++) {
        for (let number = 0; number < 5; number++) {
          if (boards[board][line][number] === winNumbers[winNumber]) {
            boards[board][line][number] = '#'
            let winningColumn = []
            for (let k = 0; k < 5; k++) {
              winningColumn.push(boards[board][k][number])
            }
            let winningLine = boards[board][line]
            if (
              checkIfWinningLine(winningLine) ||
              checkIfWinningLine(winningColumn)
            ) {
              bingoNumbers.push(winNumbers[winNumber])
              winningBoards.push(boards[board])
              indexes.push(board)
            }
          }
        }
      }
    }
    indexes.forEach((index) => {
      boards.splice(index, 1)
    })
    indexes = []
  }

  let lastWinningNumber = bingoNumbers[bingoNumbers.length - 1]
  let lastWinningboard = winningBoards[winningBoards.length - 1]

  let sumRemainingNumbers = 0
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (lastWinningboard[i][j] !== '#') {
        sumRemainingNumbers += parseInt(lastWinningboard[i][j])
      }
    }
  }

  console.log(lastWinningNumber * sumRemainingNumbers)

  console.timeEnd('adventOfCodeDay4')
})
