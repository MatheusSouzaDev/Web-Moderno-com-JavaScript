// Exemplo de classe
class Pessoa {
	constructor(nome){
		this.nome = nome // tornando a variável da class publica
	}

	falar(){
		console.log(`Meu nome é ${this.nome}`)
	}
}

const p1 = new Pessoa('João') // passando a String 'João' para o construtor
p1.falar()

// Exemplo de Função Factory
const criarPessoa = nome => {
	return {
		falar: () => console.log(`Meu nome é ${nome}`) // Função Factory não precisa acessar a variável this
	}
}

const p2 = criarPessoa('Maria')
p2.falar()