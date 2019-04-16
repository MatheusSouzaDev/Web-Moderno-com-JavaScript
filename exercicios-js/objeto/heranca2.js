// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // evitar manipular o Object prototype

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'} // quando o atributo é encontrado no primeiro objeto ela sobrescreve os outros valores
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
	velAtual: 0,
	velMax: 200,
	acelerarMais(delta){
		if(this.velAtual + delta <= this.velMax) {
			this.velAtual += delta
		} else {
			this.velAtual = this.velMax
		}
	},
	status(){
		return `${this.velAtual}Km/h de ${this.velMax}Km/h`
	}
}

const ferrari = {
	modelo: 'F40',
	velMax: 324 // shadowing
}

const volvo = {
	modelo: 'V40',
	status() {
		return `${this.modelo}: ${super.status()}`// super indica que está querendo chamar a função do prototype e não o do objeto volvo (this)
	}
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) // só irá ler os atributos do objeto sem os atributos do prototype
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())