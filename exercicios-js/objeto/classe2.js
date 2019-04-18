class Avo {
	constructor(sobrenome){
		this.sobrenome = sobrenome
	}
}

class Pai extends Avo {
	constructor(sobrenome, profissao = 'Professor'){
		super(sobrenome) // chamando o construtor da superclasse
		this.profissao = profissao
	}
}

class Filho extends Pai {
	constructor(){
		super('Silva')
	}
}

const filho = new Filho
console.log(filho)