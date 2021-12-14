const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()
  const arrayInput = stringInput.split(/\r?\n/)

  let signalPattern = arrayInput.map((line) =>
    line.split(' | ').join(' ').split(' ')
  )

  let commonLetters = (str1, str2) => {
    let count = 0
    let stringArray1 = str1.split('')
    let stringArray2 = str2.split('')
    stringArray1.forEach((letter1) => {
      stringArray2.forEach((letter2) => {
        if (letter1 === letter2) {
          count++
        }
      })
    })
    return count
  }

  let sortString = (str) => {
    return str.split('').sort().join('')
  }

  let counter = 0

  signalPattern.forEach((line) => {
    let orderedDigits = new Array(10).fill('o')
    let lineNumber = []
    for (let i = 0; i < 10; i++) {
      switch (line[i].length) {
        case 2:
          orderedDigits[1] = line[i]
          break
        case 3:
          orderedDigits[7] = line[i]
          break
        case 4:
          orderedDigits[4] = line[i]
          break
        case 7:
          orderedDigits[8] = line[i]
          break
      }
    }
    for (let i = 0; i < 10; i++) {
      switch (line[i].length) {
        case 5:
          if (commonLetters(line[i], orderedDigits[7]) === 3) {
            orderedDigits[3] = line[i]
          } else if (
            commonLetters(line[i], orderedDigits[4]) === 3 &&
            commonLetters(line[i], orderedDigits[1]) === 1
          ) {
            orderedDigits[5] = line[i]
          } else if (commonLetters(line[i], orderedDigits[4]) === 2) {
            orderedDigits[2] = line[i]
          }
          break
        case 6:
          if (commonLetters(line[i], orderedDigits[4]) === 4) {
            orderedDigits[9] = line[i]
          } else if (
            commonLetters(line[i], orderedDigits[4]) === 3 &&
            commonLetters(line[i], orderedDigits[7]) === 3
          ) {
            orderedDigits[0] = line[i]
          } else if (
            commonLetters(line[i], orderedDigits[4]) === 3 &&
            commonLetters(line[i], orderedDigits[1]) === 1
          ) {
            orderedDigits[6] = line[i]
          }
          break
      }
    }
    orderedDigits.forEach((part, index, arr) => {
      arr[index] = sortString(arr[index])
    })
    for (i = 10; i < 14; i++) {
      let temp = sortString(line[i])
      lineNumber.push(orderedDigits.indexOf(temp))
    }
    counter += parseInt(lineNumber.join().split(',').join(''))
  })

  console.log(counter)

  console.timeEnd('adventOfCodeDay')
})
