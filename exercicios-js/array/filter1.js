const produtos = [
	{ nome: 'Notebook', preco: 2499, fragil: true },
	{ nome: 'iPad Pro', preco: 4199, fragil: true },
	{ nome: 'Copo de Viddro', preco: 12.49, fragil: true },
	{ nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// retorna os elementos apenas se a condição for true
console.log(produtos.filter(function(p){
	return false
}))

// Minha solução
const eFragil = e => e.fragil
const eCaro = e => e.preco >= 500

console.log(produtos.filter(eFragil).filter(eCaro))
// Fim solução

// solução da aula
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))