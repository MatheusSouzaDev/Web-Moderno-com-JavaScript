const esperarPor = (tempo = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

const retornarValor = () => {
    return new Promise(resolve => setTimeout(() => resolve(10), 5000))
}

const retornarValorRapido = async () => {
    return 20
}

const executar = async () => {
    let valor = await retornarValorRapido()

    await esperarPor(2000)
    console.log(`Async/Await ${valor}...`)
    await esperarPor(2000)
    console.log(`Async/Await ${valor + 1}...`)
    await esperarPor(2000)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

const executarDeVerdade = async () => {
    const v = await executar()
    console.log(v)
}

executarDeVerdade()