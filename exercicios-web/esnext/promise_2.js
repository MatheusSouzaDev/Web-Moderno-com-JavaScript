setTimeout(() => {
    console.log('Executando callback...')

    setTimeout(() => {
        console.log('Executando callback...')

        setTimeout(() => {
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000)

const esperarPor = (tempo = 2000) => new Promise((resolve) => {
    setTimeout(() => {
        console.log('Executando promise...')
        resolve()
    }, tempo)
})

esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor)