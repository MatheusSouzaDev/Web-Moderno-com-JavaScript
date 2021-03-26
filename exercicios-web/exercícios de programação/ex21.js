const menorNumero = arr =>
    console.log(arr.reduce((menor, atual) => atual < menor ? atual : menor))

menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15