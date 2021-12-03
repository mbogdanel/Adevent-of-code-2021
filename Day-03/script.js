const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay3')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()
  const arrayInput = stringInput.split(/\r?\n/).join(' ').split(' ')

  let sumArray = new Array(arrayInput[0].length).fill(0)

  arrayInput.forEach((elem) => {
    for (i = 0; i < elem.length; i++) {
      sumArray[i] += parseInt(elem.charAt(i))
    }
  })

  let gamaArray = sumArray.map((item) => (item < arrayInput.length / 2 ? 0 : 1))

  let epsilonArray = gamaArray.map((item) => (item === 1 ? 0 : 1))

  let consumption =
    parseInt(gamaArray.join(''), 2) * parseInt(epsilonArray.join(''), 2)

  console.log(consumption)

  // ----------part2------------------------

  let oxigenRating = arrayInput
  let j = 0
  do {
    let k = 0
    oxigenRating.forEach((element) => {
      k += parseInt(element[j])
    })

    oxigenRating = oxigenRating.filter((element) => {
      oxigenRating.forEach
      return element.charAt(j) === (k >= oxigenRating.length / 2 ? '1' : '0')
    })
    j++
  } while (oxigenRating.length > 1)

  let scrubberRating = arrayInput
  j = 0
  do {
    let k = 0
    scrubberRating.forEach((element) => {
      k += parseInt(element[j])
    })

    scrubberRating = scrubberRating.filter((element) => {
      scrubberRating.forEach
      return element.charAt(j) === (k < scrubberRating.length / 2 ? '1' : '0')
    })
    j++
  } while (scrubberRating.length > 1)

  let lifeSupportRating =
    parseInt(oxigenRating[0], 2) * parseInt(scrubberRating[0], 2)

  console.log(lifeSupportRating)

  console.timeEnd('adventOfCodeDay3')
})
