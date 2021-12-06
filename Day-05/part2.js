const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()
  const arrayInput = stringInput.split(/\r?\n/)
  let coordinatesArray = arrayInput.map((val) =>
    val.split(' -> ').join(',').split(',')
  )
  coordinatesArray.forEach((line) => {
    for (i = 0; i < 4; i++) {
      line[i] = parseInt(line[i])
    }
  })

  let diagram = new Array(1000)
  for (i = 0; i < 1000; i++) {
    diagram[i] = new Array(1000)
    for (j = 0; j < 1000; j++) {
      diagram[i][j] = '.'
    }
  }

  coordinatesArray.forEach((line) => {
    if (line[0] === line[2]) {
      for (
        i = Math.min(line[1], line[3]);
        i <= Math.max(line[1], line[3]);
        i++
      ) {
        if (diagram[line[0]][i] === '.') {
          diagram[line[0]][i] = 1
        } else diagram[line[0]][i]++
      }
    } else if (line[1] === line[3]) {
      for (
        i = Math.min(line[0], line[2]);
        i <= Math.max(line[0], line[2]);
        i++
      ) {
        if (diagram[i][line[1]] === '.') {
          diagram[i][line[1]] = 1
        } else diagram[i][line[1]]++
      }
    } else if (Math.abs(line[0] - line[2]) === Math.abs(line[1] - line[3]))
      if (line[0] + line[1] === line[2] + line[3]) {
        //------secondary diagonal
        let j = Math.max(line[1], line[3])
        for (
          i = Math.min(line[0], line[2]);
          i <= Math.max(line[0], line[2]);
          i++
        ) {
          if (diagram[i][j] === '.') {
            diagram[i][j] = 1
            j--
          } else {
            diagram[i][j]++
            j--
          }
        }
      } else {
        //   -------------primary diaginal
        let j = Math.min(line[1], line[3])
        for (
          i = Math.min(line[0], line[2]);
          i <= Math.max(line[0], line[2]);
          i++
        ) {
          if (diagram[i][j] === '.') {
            diagram[i][j] = 1
            j++
          } else {
            diagram[i][j]++
            j++
          }
        }
      }
  })

  let counter = 0
  diagram.forEach((line) => {
    line.forEach((val) => {
      if (val > 1) {
        counter++
      }
    })
  })

  console.log(counter)

  console.timeEnd('adventOfCodeDay')
})
