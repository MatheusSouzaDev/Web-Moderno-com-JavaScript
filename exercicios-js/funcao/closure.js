// Closure é o escopo criado quando uma função é declarada 
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    //inicio do contexto
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
    // final contexto
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // vai chamar a variável 'Local' pois o contexto onde a função foi declarata está localizada a constante com o valor 'Local'