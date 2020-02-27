const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3,4) // vai somar os valores por soma ser default
imprimirResultado(3, 4, soma) // passando os valores e a função soma
imprimirResultado(3, 4, function (x, y){ return x - y }) // valores e uma função anonima normal de subtração
imprimirResultado(3, 4, (x, y) => x * y) // valores e arrow function (sempre será anonima)

//alocando uma função anonima em um objeto
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()