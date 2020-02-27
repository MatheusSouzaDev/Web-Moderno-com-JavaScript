const alunos = [
	{nome: 'João', nota: 7.3, bolsista: false},
	{nome: 'Maria', nota: 9.2, bolsista: true},
	{nome: 'Pedro', nota: 9.8, bolsista: false},
	{nome: 'Ana', nota: 8.7, bolsista: true}
]


// Desafio 1: Todos os alunos são bolsista?
// Minha solução
const resultado1 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
	return acumulador && atual ? true : false
})
console.log(`Todos os alunos são bolsista? ${resultado1}`)

// Solução da aula
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
// Minha solução
const resultado2 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
	return acumulador || atual ? true : false
})
console.log(`Algum aluno é bolsista? ${resultado2}`)

// Solução da aula
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))