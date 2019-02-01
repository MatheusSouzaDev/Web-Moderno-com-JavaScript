const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        // Acessar o atributo saudação do objeto que contém a função precisa utilizar o "this"
        console.log(this.saudacao);
    }
}

pessoa.falar()

// armazenando a função em uma variável
const falar = pessoa.falar
falar()

// passar um objeto para que o This referencie ele, utiliza o Bind
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();