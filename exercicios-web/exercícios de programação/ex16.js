const checarAnoBissexto = ano =>
    console.log(
        (ano % 4 == 0 
        && ano % 100 != 0) 
        || ano % 400 == 0
    )

checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400