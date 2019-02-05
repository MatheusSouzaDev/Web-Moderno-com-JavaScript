function criarProduto(nome, preco) {
	return {
		nome, // não é necessário repetir nome: nome pois ja está sendo passado no parâmetro da função
		preco, // o mesmo vale para preco
		desconto: 0.1 
	}
}

console.log(criarProduto('Fone Bluetooth QCY', 160.00))
console.log(criarProduto('Xiaomi Mi 6 Pro', 1600.00))