const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()
  const arrayInput = stringInput.split(',')

  let lanternfish = arrayInput.map((val) => parseInt(val))

  let newFish = 0
  for (i = 1; i <= 256; i++) {
    newFish = 0
    for (j = 0; j < lanternfish.length; j++) {
      if (lanternfish[j] !== 0) {
        lanternfish[j] = lanternfish[j] - 1
      } else {
        lanternfish[j] = 6
        newFish++
      }
    }
    for (var k = 0; k < newFish; k++) {
      lanternfish.push(8)
    }
  }

  console.log(lanternfish.length)

  console.timeEnd('adventOfCodeDay')
})
