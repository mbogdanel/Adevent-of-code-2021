const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay1')
  if (err) {
    console.log('errororrrr')
  }
  const stringInput = data.toString()
  const arrayInput = stringInput.split(/\r?\n/).map(Number)

  //   console.log(arrayInput)

  let increases = null
  for (i = 1; i <= arrayInput.length; i++) {
    if (arrayInput[i] > arrayInput[i - 1]) {
      increases++
    }
  }

  let sumsIncreases = null
  for (i = 0; i < arrayInput.length - 3; i++) {
    if (arrayInput[i] < arrayInput[i + 3]) {
      sumsIncreases++
    }
  }

  console.log(
    'the number of times a depth measurement increases is ' + increases
  )
  console.log(
    'Number of sums that are larger than the previous sum ' + sumsIncreases
  )

  console.timeEnd('adventOfCodeDay1')
})
