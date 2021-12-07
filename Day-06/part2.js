const fs = require('fs')

fs.readFile('./inputTest.txt', (err, data) => {
  console.time('adventOfCodeDay')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()
  const arrayInput = stringInput.split(',')

  let lanternfish = arrayInput.map((val) => parseInt(val))

  let lanternfishObject = {}
  for (k = 0; k <= 8; k++) {
    lanternfishObject[k] = null
  }

  lanternfish.forEach((val) => {
    lanternfishObject[val]++
  })

  console.log(lanternfishObject)

  for (i = 1; i <= 3; i++) {
    for (let key in lanternfishObject) {
      if (key === '0') {
        lanternfishObject['0']--
        lanternfishObject['6']++
        lanternfishObject['8']++
      } else {
        lanternfishObject[key]--
        lanternfishObject[parseInt(key) - 1]++
      }
    }
    console.log(lanternfishObject)
    console.log('#-------------------------------------')
  }
  //   let numberOfFish = 0
  //   for (value of lanternfishObject) {
  //     numberOfFish += value
  //   }
  //   console.log(numberOfFish)

  console.timeEnd('adventOfCodeDay')
})
