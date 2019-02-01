function Pessoa() {
    this.idade = 0;

    // fazendo que o this seja alocado em uma constante
    const self = this;

    // setInterval dispara uma função de acordo com intervalo proposto
    // a cada 1s a função anônima será disparada
    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)amarrando o this ao objeto*/, 1000)
}

// Criando um novo objeto Pessoa
new Pessoa;