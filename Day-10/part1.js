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

  let score = 0
  // Points for ilegal character
  // ): 3 points.
  // ]: 57 points.
  // }: 1197 points.
  // >: 25137 points.

  subsystem.forEach((line) => {
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
        switch (line[i]) {
          case ')':
            score += 3
            break
          case ']':
            score += 57
            break
          case '}':
            score += 1197
            break
          case '>':
            score += 25137
            break
        }
        i = line.length
      }
    }
  })

  console.log(score)

  console.timeEnd('adventOfCodeDay')
})
