const gerarNumeroEntre = (min, max, tempo) => {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * (max - min + 1)) + min
            resolve(random)
        }, tempo)
    })
}

const gerarVariosNumeros = () => {
    return Promise.all([
        gerarNumeroEntre(1, 60, 4000),
        gerarNumeroEntre(1, 60, 1000),
        gerarNumeroEntre(1, 60, 500),
        gerarNumeroEntre(1, 60, 3000),
        gerarNumeroEntre(1, 60, 100),
        gerarNumeroEntre(1, 60, 1500)
    ])
}

console.time('promise')
gerarVariosNumeros()
    .then(console.log)
    .then(() => console.timeEnd('promise'))
