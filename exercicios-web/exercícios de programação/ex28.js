const filtrarPorQuantidadeDeDigitos = (arr, digits) =>
    console.log(arr.filter(e => String(e).length === digits))

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]