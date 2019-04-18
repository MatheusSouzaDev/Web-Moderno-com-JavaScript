// Object.preventExtensions: pode excluir atributos do objeto mas não pode adicionar novos
const produto = Object.preventExtensions({
	nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // O atributo pode ser alterado pois o .preventExtensions não congela o objeto igual o .freeze
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal: não consegue adicionar, excluir novos atributos mas consegue alterar os valores
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa) // selando o objeto
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silvia'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze: selado + valores constantes