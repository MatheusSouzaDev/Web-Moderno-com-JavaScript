const calcularSalario =
    (horasMes, recebeHora) =>
    console.log(`Salário igual a R$ ${(horasMes*recebeHora).toFixed(2)}`)

calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"
calcularSalario(150, 32.75) 