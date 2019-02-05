const valor = 'Global'

//a função pegará o valor do contexto onde ela foi declarada não da onde ela foi chamada
function minhaFuncao() {
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()// chamará o valor 'Global'