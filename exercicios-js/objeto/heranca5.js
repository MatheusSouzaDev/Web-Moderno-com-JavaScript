// Os 3 possuem atributo .prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
	return this.split('').reverse().join('') // split tranforma a String em array / Reverse pega o reverso do array / Join junta novamente a string
}

console.log('Coruja'.reverse())

Array.prototype.first = function () {
	return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () { //pode causar efeitos colaterais
	return 'Lascou tudo'
}

console.log('Coruja'.reverse())