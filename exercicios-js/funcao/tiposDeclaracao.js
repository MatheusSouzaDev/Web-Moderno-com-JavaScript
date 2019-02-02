// mesmo o log sendo antes da declaração da função o Js carrega primeiro as funções
console.log(soma(3, 4))

// caso a função esteja declarada em function expression ela deve ser declarada antes de ser chamada
// console.log(sub(3, 4)) // erro

// function declaration
function soma(x, y) {
    return x + y
}

// function expression - armazenar função anônima em uma variável
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4))

// named function expression - armazenar função nomeada em variável - ajuda em stack
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4))