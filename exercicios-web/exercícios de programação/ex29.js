const segundoMaior = arr => {
    const sortMaior = arr.sort((a, b) => b - a)
    console.log(sortMaior[1])
}


segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6