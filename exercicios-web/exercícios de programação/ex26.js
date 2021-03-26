const removerVogais = palavra =>
    console.log(palavra.replace(/[aeiou]/ig, ''))

removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"