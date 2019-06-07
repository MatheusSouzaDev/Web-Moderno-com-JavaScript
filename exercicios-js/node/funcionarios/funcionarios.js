const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Minha solução
const china = c => c.pais == 'China'
const mulher = m => m.genero == 'F'
const mSalario = (anterior, atual) => atual.salario < anterior.salario ? atual : anterior
// Fim solução

// Aula
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
	return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
	const funcionarios = response.data
	//console.log(funcionarios)

	// mulher chinesa com menor salário?
	// Minha solução
	console.log(funcionarios.filter(china).filter(mulher).reduce(mSalario))
	
	// Aula
	const func = funcionarios
		.filter(chineses)
		.filter(mulheres)
		.reduce(menorSalario)

	console.log(func)
})