// Coleção dinâmica de pares chave/valor
const produto = new Object
// Atribuindo chave e valor de formas diferentes
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

// deletar atributos usando delete
delete produto.preco
delete produto['marca do produto']
console.log(produto)

// Objeto pode ter valores, array normal, array de objetos
const carro = {
	modelo: 'A4',
	valor: 89000,
	proprietario: {
		nome: 'Raul',
		idade: 56,
		endereco: {
			logradouro: 'Rua ABC',
			numero: 123
		}
	},
	condutores: [{
		nome: 'Junior',
		idade: 19
	}, {
		nome: 'Ana',
		idade: 42
	}],
	calcularValorSeguro: () => {
		// ...
	}
}
console.log(carro.proprietario)

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

// Tudo que esta abaixo da chave deletada será tirada do objeto
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) // Após deletado ele retornará undefined mas não irá apresentar erro
//console.log(carro.condutores.length) // Se tentar acessar algo dentro do undefined vai dar erro