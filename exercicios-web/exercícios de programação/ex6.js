const inverso = (value) => {
    typeof value === "boolean" ?
        console.log(!value) :
        typeof value === "number" ?
        console.log(-value) :
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${typeof value}`)
}

inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
inverso(-2000) // retornará 2000
inverso("programação") // retornará "booleano ou números, mas o parâmetro é do tipo string"