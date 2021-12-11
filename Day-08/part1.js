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

  let counter = 0

  signalPattern.forEach((line) => {
    for (let i = 10; i < line.length; i++) {
      if ([2, 3, 4, 7].includes(line[i].length)) {
        counter++
      }
    }
  })

  console.log(counter)

  console.timeEnd('adventOfCodeDay')
})
