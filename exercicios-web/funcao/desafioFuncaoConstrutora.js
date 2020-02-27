// Desafio transformar a classe em uma função construtora
function Pessoa (nome){
	this.nome = nome // tornando a variável da class publica
	
	this.falar = function(){
		console.log(`Meu nome é ${this.nome}`)
	}
}

const p1 = new Pessoa('João') // passando a String 'João' para o construtor
p1.falar()