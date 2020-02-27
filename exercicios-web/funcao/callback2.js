//gerar um novo array com todas notas menores que 7
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback
const notasBaixas1 = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)


// Com callback
/*função filter que irá filtrar os elementos do array que retornará true ou false*/
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

const notaMenorQue7 = nota => nota < 7 // função array em uma constante
const notasBaixas3 = notas.filter(notaMenorQue7) // array function
console.log(notasBaixas3)