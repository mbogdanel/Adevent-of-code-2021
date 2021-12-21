const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()
  const arrayInput = stringInput.split(/\r?\n/)

  let heightmap = arrayInput.map((line) => line.split(''))

  let count = 0
  let lowPoints = []
  for (i = 0; i < heightmap.length; i++) {
    for (j = 0; j < heightmap[i].length; j++) {
      if (
        (!(i - 1 >= 0) || heightmap[i - 1][j] > heightmap[i][j]) &&
        (!(j - 1 >= 0) || heightmap[i][j - 1] > heightmap[i][j]) &&
        (!(i + 1 < heightmap.length) ||
          heightmap[i + 1][j] > heightmap[i][j]) &&
        (!(j + 1 < heightmap[i].length) ||
          heightmap[i][j + 1] > heightmap[i][j])
      ) {
        count += Number(heightmap[i][j]) + 1
        lowPoints.push([i, j]) // saving the low points for second part
      }
    }
  }

  console.log(count)

  const floodfill = (i, j, map) => {
    if (map[i][j] > 8) return 0 // check node hasn't been visited
    map[i][j] = 9 // mark node as visited

    let size = 1

    if (i - 1 >= 0) {
      size += floodfill(i - 1, j, map)
    }
    if (i + 1 < map.length) {
      size += floodfill(i + 1, j, map)
    }
    if (j - 1 >= 0) {
      size += floodfill(i, j - 1, map)
    }
    if (j + 1 < map[i].length) {
      size += floodfill(i, j + 1, map)
    }

    return size
  }

  let bassins = []

  lowPoints.forEach((point) => {
    bassins.push(floodfill(point[0], point[1], heightmap))
  })

  // console.log(heightmap.map((x) => x.join``).join`\n`)

  bassins.sort((a, b) => b - a)
  console.log(bassins[0] * bassins[1] * bassins[2])

  console.timeEnd('adventOfCodeDay')
})
