const funcaoDaSorte = num => {
    let min = 1
    let max = 10
    let numero = Math.floor(Math.random() * (max - min + 1) + min)

    console.log(
        numero == num ?
        `Parabéns! O número sorteado foi o ${numero}` :
        `Que pena, o número sorteado foi o ${numero}`
    )
}

funcaoDaSorte(10) 
funcaoDaSorte(5) 
funcaoDaSorte(5) 