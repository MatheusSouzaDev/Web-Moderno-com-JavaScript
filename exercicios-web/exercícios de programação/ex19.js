const calcularMedia = arr => {
    let soma = arr.reduce((ac, x) => ac + x)
    console.log(soma / arr.length)
}

calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3