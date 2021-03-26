const inverter = obj => {
    let novo = {}
    
    Object.entries(obj)
        .forEach(element => {
            novo[element[1]] = element[0]
        });

    console.log(novo)
}

inverter({
    a: 1,
    b: 2,
    c: 3
}) // retornará { 1: "a", 2: "b", 3: "c"}