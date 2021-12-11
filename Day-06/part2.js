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

  // console.log(lanternfishObject)

  for (i = 1; i <= 3; i++) {
    for (let key in lanternfishObject) {
      if (key === '0' && lanternfishObject['0'] !== null) {
        lanternfishObject['0'] = lanternfishObject['0'] - 1
        lanternfishObject['6'] = lanternfishObject['6'] + 1
        lanternfishObject['8'] = lanternfishObject['8'] + 1
      } else if (
        key !== '0' &&
        lanternfishObject[key] !== null &&
        lanternfishObject[key] !== 0
      ) {
        lanternfishObject[key] = lanternfishObject[key] - 1
        lanternfishObject[`${parseInt(key) - 1}`] =
          lanternfishObject[`${parseInt(key) - 1}`] + 100
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
