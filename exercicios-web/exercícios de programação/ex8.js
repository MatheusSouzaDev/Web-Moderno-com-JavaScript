const multiplicar = (x, y) => {
    let total = 0;
    for(let i = 0; i < y; i++) {
        total+=x
    }

    console.log(total)
}

multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
multiplicar(3, 2) // retornará 6