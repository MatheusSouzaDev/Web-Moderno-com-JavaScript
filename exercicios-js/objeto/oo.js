// CÓDIGO NÃO EXECUTÁVEL!!!

// Procedural -> As funções manipulam os dados
processamento(valor1, valor2, valor3)

// OO -> Tem dados que dentro deles possuem funções
objeto = {
	valor1,
	valor2,
	valor3,
	processamento() {
		// ...
	}
}

objeto.processamento() // Foco mudou de funções para ser o objeto

// Principios importantes:
// 1. Abstração => Pegar um objeto do mundo real e introduzir ao sistema CARRO = {Atributos: peso, altura, velocidade máxima, Métodos: ligar, acelerar, parar}
// 2. Encapsulamento => esconder os detales da implementação e mostrar uma interface simples para interagir com o obejto. Ex.: conhecer que o automóvel precisa de combustível para andar, mas não precisa ter conhecimento de como o motor usa o combustível para movimentar.