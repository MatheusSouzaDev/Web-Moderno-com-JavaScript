const nomeDoMes = (numMes) => {
    if (numMes < 1 || numMes > 12) {
        return console.log("Mês inválido!")
    }
    const mesesDoAno = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ]

    return console.log(mesesDoAno[--numMes])
}

nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril"
nomeDoMes(0) // retornará erro
nomeDoMes(13) // retornará erro