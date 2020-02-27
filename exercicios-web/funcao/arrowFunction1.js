let dobro = function (a) {
    return 2 * a;
}

// trocar "function" por "=>"
dobro = (a) => {
    return 2*a;
}

// função de uma única linha que implicitamente retorna o valor sem precisar de chamar o return
dobro = a => 2 * a;
console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá';
}

ola = () => 'Olá'; // pode fazer funções arrow vazias
ola = _ => 'Olá'; // Possui param mas o Js ignora se n passar nenhum parametro
console.log(ola());