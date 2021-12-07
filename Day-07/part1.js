const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()
  const positions = stringInput.split(',')

  let min = Math.min.apply(null, positions)
  let max = Math.max.apply(null, positions)

  let fuelCostArray = []

  for (let i = min; i <= max; i++) {
    let fuelTemp = 0
    positions.forEach((position) => {
      fuelTemp += Math.abs(position - i)
    })
    fuelCostArray.push(fuelTemp)
  }

  let minFuelCost = Math.min.apply(null, fuelCostArray)

  console.log(minFuelCost)

  console.timeEnd('adventOfCodeDay')
})
