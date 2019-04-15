// usando a notação literal (não confundir com JSON)
const obj1 = {}
console.log(obj1)

// Object (função) em JS
console.log('Objeto é:', typeof Object, '\nSe usar um construtor vira:', typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc){
	// preco e desconto não pode ser acessado pois não foi declarada públicas

	this.nome = nome // tornar variável pública
	this.getPrecoComDesconto = () => {
		return preco * (1 - desc)
	}
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory (Factory é uma função que fabrica alguma coisa [no caso, objeto])
function criarFuncionario(nome, salarioBase, faltas){
	return{
		nome,
		salarioBase,
		faltas,
		getSalario() {
			return (salarioBase / 30) * (30 - faltas)
		}
	}
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info) // posso acessar como um objeto por ter convertido