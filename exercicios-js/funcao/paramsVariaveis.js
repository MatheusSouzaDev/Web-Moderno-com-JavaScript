function soma() {
    let soma = 0;
    for (let i in arguments) { // pegar o indice do array arguments
        soma += arguments[i]; // executando a função com os parâmetros passados
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma (1.1, 2.2, 3.3));
console.log(soma(1.1, 2.2, "Teste")); // soma primeiro os valores e depois concatena a string
console.log(soma('a', 'b', 'c')); // apenas concatena
console.log(soma(1, 'teste', 2)); // somou o 0+1 e concatenou o resto
