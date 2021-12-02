const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay2')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()
  const arrayInput = stringInput.split(/\r?\n/).join(' ').split(' ')

  let depth = 0
  let horizontal = 0
  for (i = 0; i < arrayInput.length - 1; i += 2) {
    switch (arrayInput[i]) {
      case 'forward':
        horizontal += parseInt(arrayInput[i + 1])
        break
      case 'up':
        depth -= parseInt(arrayInput[i + 1])
        break
      default:
        depth += parseInt(arrayInput[i + 1])
    }
  }

  let depth2 = 0
  let horizontal2 = 0
  let aim = 0
  for (i = 0; i < arrayInput.length - 1; i += 2) {
    switch (arrayInput[i]) {
      case 'down':
        aim += parseInt(arrayInput[i + 1])
        break
      case 'up':
        aim -= parseInt(arrayInput[i + 1])
        break
      default:
        horizontal2 += parseInt(arrayInput[i + 1])
        depth2 += aim * parseInt(arrayInput[i + 1])
    }
  }

  console.log('result part1 ' + depth * horizontal)
  console.log('result part2 ' + depth2 * horizontal2)

  console.timeEnd('adventOfCodeDay2')
})
