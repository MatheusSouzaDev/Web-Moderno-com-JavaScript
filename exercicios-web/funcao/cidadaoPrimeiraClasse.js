// Função em JS é First-Class Object (Citizens)
// Higher-order function


// criar de forma literal
// retorna udefined se não retornar valor
// função não pode omitir os blocos de código
function fun1() {} 

// Armazenar em uma variável
// Função anônima ()
const fun2 = function () {}

// Armazenar em um array
const array = [function (a, b) {
    return a + b
}, fun1, fun2]
console.log(array[0](2, 3)); //executando a função pelo índice

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {
    return 'Opa'
}
console.log(obj.falar()); // executando a função do objeto

// Passar função como parametro para executar ela
function run(fun) {
    fun();
}

run(function () {
    console.log('Executando...');
});

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2, 3)(4); // executando a função e rodando a função de retorno

const cincoMais = soma(2, 3); // declarando uma contante com a função
cincoMais(4); // executando a função de retorno