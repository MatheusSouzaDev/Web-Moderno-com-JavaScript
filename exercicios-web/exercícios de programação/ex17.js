const somarNumeros = (arr) =>
    console.log(arr.reduce((total, e) => total + e))


somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60