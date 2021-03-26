const maiorOuIgual = (x, y) => {
    console.log(typeof x == typeof y && x >= y)
}

maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true