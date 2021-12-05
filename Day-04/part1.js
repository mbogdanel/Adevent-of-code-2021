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

  let bingoNumbers = []
  let bingoBoardIndex = 0

  for (let winNumber = 0; winNumber < winNumbers.length; winNumber++) {
    for (let board = 0; board < boards.length; board++) {
      for (let line = 0; line < boards[board].length; line++) {
        for (let number = 0; number < 5; number++) {
          if (boards[board][line][number] === winNumbers[winNumber]) {
            boards[board][line][number] = '#'
          }
          let winningColumn = []
          for (let k = 0; k < 5; k++) {
            winningColumn.push(boards[board][k][number])
          }
          if (
            boards[board][line].every((val) => val === '#') ||
            winningColumn.every((val) => val === '#')
          ) {
            bingoNumbers.push(winNumbers[winNumber])
            bingoBoardIndex = board

            winNumber = winNumbers.length
            break
          }
        }
      }
    }
  }

  let sumRemainingNumbers = 0
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (boards[bingoBoardIndex][i][j] !== '#') {
        sumRemainingNumbers += parseInt(boards[bingoBoardIndex][i][j])
      }
    }
  }

  console.log(sumRemainingNumbers * bingoNumbers[0])

  console.timeEnd('adventOfCodeDay4')
})
