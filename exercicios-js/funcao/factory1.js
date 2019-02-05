/* Em um cadastro de produtos iria demorar muito se fosse criar cada objeto um produto, para isso serve o Function Factory
const prod1 = {
	nome: '...',
	preco: 45
}

const prod2 = {
	nome: '...',
	preco: 1234
}*/

// Factory Simples que retorna um objeto
function criarPessoa(){
	return{
		nome: 'Ana',
		sobrenome: 'Silva'
	}
}

console.log(criarPessoa())