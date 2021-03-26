const estaEntre = (min, max, numero, inclusivo = false) => {
    let result = inclusivo ? numero >= min && numero <= max :
        numero > min && numero < max
    return console.log(result);
}

estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true