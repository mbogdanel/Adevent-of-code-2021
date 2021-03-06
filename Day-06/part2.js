const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()
  const arrayInput = stringInput.split(',')

  let lanternfish = arrayInput.map((val) => parseInt(val))

  let lanternfishCount = new Array(9).fill(0)

  lanternfish.forEach((fish) => {
    lanternfishCount[fish]++
  })

  let tempArray = new Array(9).fill(0)

  for (i = 1; i <= 256; i++) {
    for (j = 1; j < lanternfishCount.length; j++) {
      tempArray[j - 1] += lanternfishCount[j]
      tempArray[j] = 0
    }
    tempArray[8] += lanternfishCount[0]
    tempArray[6] += lanternfishCount[0]
    lanternfishCount = tempArray
    tempArray = new Array(9).fill(0)
  }

  const sum = lanternfishCount.reduce(add, 0)
  function add(accumulator, a) {
    return accumulator + a
  }
  console.log(sum)

  console.timeEnd('adventOfCodeDay')
})
