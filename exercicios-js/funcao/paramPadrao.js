// estrategia 1 para gerar valor padrão
// 0 é considerado valor falso
function soma1(a, b, c) { // operador OU
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c; // valores já atribuidos 
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));

// estrategia 2, 3 e 4 para gerar valor padrão
// se passar valor 0 com essas operações ele é identificado como valor true
function soma2(a, b, c) {
    a = a !== undefined ? a : 1; // utilizar valor ternário ? : 
    b = 1 in arguments ? b : 1; // se existir o segundo índice 
    c = isNaN(c) ? 1 : c; // se não for um número
    return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

// valor padrão do es2015
// reduzindo a forma de escrever
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));