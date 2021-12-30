const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay')
  if (err) {
    console.log('ewrrororrrr')
  }
  const matrix = data
    .toString()
    .split(/\r?\n/)
    .map((line) => [...line].map(Number))

  let flashes = 0
  let simultaniusFlashes = 0
  let numberOfTurns = 0

  function increaseEnergy({ i, j, flashedCoordinates }) {
    // Check that it's a valid coordinate
    if (typeof matrix[i] === 'undefined') return
    if (typeof matrix[i][j] === 'undefined') return

    // Check it hasn't flashed yet
    const octopus = i + ':' + j
    if (flashedCoordinates.has(octopus)) {
      return
    }

    matrix[i][j]++
    if (matrix[i][j] > 9) {
      simultaniusFlashes++
      // Flash and increase its neighbours counter by one
      matrix[i][j] = 0
      flashedCoordinates.add(octopus)
      flashes++

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) continue

          increaseEnergy({ i: i + x, j: j + y, flashedCoordinates })
        }
      }
      return
    }
  }

  function turn() {
    let flashedCoordinates = new Set()

    for (let i = 0; i < matrix.length; i++) {
      const line = matrix[i]
      for (let j = 0; j < line.length; j++) {
        increaseEnergy({ i, j, flashedCoordinates })
      }
    }
  }

  while (true) {
    simultaniusFlashes = 0
    turn()
    numberOfTurns++

    if (numberOfTurns === 100) {
      console.log(flashes)
    }

    if (simultaniusFlashes === matrix.length * matrix[0].length) {
      console.log(numberOfTurns)
      break
    }
  }

  console.timeEnd('adventOfCodeDay')
})
