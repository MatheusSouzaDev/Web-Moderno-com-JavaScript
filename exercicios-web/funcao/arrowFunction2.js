function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000)
}

// Criando um novo objeto Pessoa
new Pessoa; // this não varia por causa da arrow function