const carrinho = [
	'{ "nome": "Borracha", "preco": 3.45 }',
	'{ "nome": "Caderno", "preco": 13.90 }',
	'{ "nome": "Kit de Lapis", "preco": 41.22}',
	'{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

//Minha solução para o desafio
const precos = carrinho.map((e) => JSON.parse(e).preco)

console.log(precos)
// Fim da minha solução

// Solução da aula
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)