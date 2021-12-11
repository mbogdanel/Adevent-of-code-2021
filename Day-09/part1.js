const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()
  const arrayInput = stringInput.split(/\r?\n/)

  let heightmap = arrayInput.map((line) => line.split(''))

  heightmap.forEach((line) => {
    line.push('9')
    line.unshift('9')
  })
  heightmap.push(new Array(heightmap[0].length).fill('9'))
  heightmap.unshift(new Array(heightmap[0].length).fill('9'))

  let count = 0
  for (i = 1; i < heightmap.length - 1; i++) {
    for (j = 1; j < heightmap[i].length - 1; j++) {
      if (
        heightmap[i - 1][j] > heightmap[i][j] &&
        heightmap[i][j - 1] > heightmap[i][j] &&
        heightmap[i + 1][j] > heightmap[i][j] &&
        heightmap[i][j + 1] > heightmap[i][j]
      ) {
        count += parseInt(heightmap[i][j]) + 1
      }
    }
  }

  console.log(count)

  console.timeEnd('adventOfCodeDay')
})
