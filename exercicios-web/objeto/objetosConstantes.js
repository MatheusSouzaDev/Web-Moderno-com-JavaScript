// pesso -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} // Apontar para outro endereço
// pessoa = { nome: 'Ana'} Erro

Object.freeze(pessoa) // congela o objeto para não ser alterado os valores

// não dá erro mas também não permite alteração
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC' 
delete pessoa.nome

console.log(pessoa.nome) 
console.log(pessoa)

const pesssoaConstante = Object.freeze({nome: 'Joao'})
pesssoaConstante.nome = 'Maria'
console.log(pesssoaConstante)