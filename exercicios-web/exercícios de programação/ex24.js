const contarCaractere = (char, frase) =>
    console.log([...frase].filter(c => c === char).length)

contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1