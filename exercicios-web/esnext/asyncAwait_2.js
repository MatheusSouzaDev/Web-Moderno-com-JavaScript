const gerarNumeroEntre = (min, max, numerosProibidos) => {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const random = Math.floor(Math.random() * (max - min + 1)) + min
        if (numerosProibidos.includes(random)) reject('Número repetido!')
        else resolve(random)
    })
}

const gerarMegaSena = async (qtdNumeros, tentativas = 1) => {
    try {
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        if (tentativas > 100) {
            throw 'Não deu certo!'
        }

        return gerarMegaSena(qtdNumeros, tentativas +1)
    }
}

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)

// gerarNumeroEntre(1,5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)