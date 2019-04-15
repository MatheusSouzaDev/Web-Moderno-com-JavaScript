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
// Esconder a implementação -> Expor a interface de comunicação
// 3. Herança (prototype) => 3 tipos
// * Composição: Carro tem um motor, não precisa colocar a complexidade do motor no objeto carro mas criar um objeto chamado motor que vai estar compondo o carro
// * Herança: tomar características, comportamentos e atributos dos objetos pais. JS não permite multiplos pais. 
// Objeto Pai: Civic é um carro.
// Objeto Filho: O carro tem um motor, o carro tem portas. 
// 4. Polimorfismo => Através de um conceito genérico pode se tornar algo mais abstrato. Um carro pode ser apontado para uma ferrari, ou uno.