const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()
  const arrayInput = stringInput.split(/\r?\n/)

  let subsystem = arrayInput.map((line) => {
    return line.split('')
  })

  let corruptedIndexes = []

  subsystem.forEach((line, index, arr) => {
    let tempBrackets = []
    for (let i = 0; i < line.length; i++) {
      if (['(', '[', '{', '<'].includes(line[i])) {
        tempBrackets.push(line[i])
      } else if (
        line[i] === ')' &&
        tempBrackets[tempBrackets.length - 1] === '('
      ) {
        tempBrackets.pop()
      } else if (
        line[i] === ']' &&
        tempBrackets[tempBrackets.length - 1] === '['
      ) {
        tempBrackets.pop()
      } else if (
        line[i] === '}' &&
        tempBrackets[tempBrackets.length - 1] === '{'
      ) {
        tempBrackets.pop()
      } else if (
        line[i] === '>' &&
        tempBrackets[tempBrackets.length - 1] === '<'
      ) {
        tempBrackets.pop()
      } else {
        corruptedIndexes.push(index)
        i = line.length
      }
    }
  })

  let incompleteLines = subsystem.filter((line, index) => {
    if (!corruptedIndexes.includes(index)) {
      return line
    }
  })

  let bracketsAddedArray = []
  incompleteLines.forEach((line) => {
    let tempBrackets = []
    for (let i = 0; i < line.length; i++) {
      if (['(', '[', '{', '<'].includes(line[i])) {
        tempBrackets.push(line[i])
      } else if (
        line[i] === ')' &&
        tempBrackets[tempBrackets.length - 1] === '('
      ) {
        tempBrackets.pop()
      } else if (
        line[i] === ']' &&
        tempBrackets[tempBrackets.length - 1] === '['
      ) {
        tempBrackets.pop()
      } else if (
        line[i] === '}' &&
        tempBrackets[tempBrackets.length - 1] === '{'
      ) {
        tempBrackets.pop()
      } else if (
        line[i] === '>' &&
        tempBrackets[tempBrackets.length - 1] === '<'
      ) {
        tempBrackets.pop()
      }
    }
    bracketsAddedArray.push(tempBrackets)
  })

  let pointsArray = []
  let points = 0

  bracketsAddedArray.forEach((chunk) => {
    points = 0
    for (i = chunk.length - 1; i >= 0; i--) {
      switch (chunk[i]) {
        case '(':
          points = points * 5 + 1
          break
        case '[':
          points = points * 5 + 2
          break
        case '{':
          points = points * 5 + 3
          break
        case '<':
          points = points * 5 + 4
          break
      }
    }
    pointsArray.push(points)
  })

  pointsArray.sort((a, b) => a - b)

  console.log(pointsArray[Math.floor(pointsArray.length / 2)])

  console.timeEnd('adventOfCodeDay')
})
