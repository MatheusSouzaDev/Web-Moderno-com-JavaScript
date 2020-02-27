function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo que pertence apenas a esse escopo, privado
    let velocidadeAtual = 0

    // metodo publico com o this
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico que permite pegar o valor da velocidade atual
    this.getVelocidadeAtual = function () {
        return velocidadeAtual 
    }
}

const uno = new Carro 
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)