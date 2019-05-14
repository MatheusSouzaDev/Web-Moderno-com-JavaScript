const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // pode mudar o array mas não pode atribuir outro valor a constante
pilotos.pop() // Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adiocionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // removendo 1 elemento a partir do índice 3
console.log(pilotos)

// retornar outro array
const algunsPilotos1 = pilotos.slice(2) // novo array gerado a partir do índice indicado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)