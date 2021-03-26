const repetir = (element, repeat) => {
    let array = []

    for(let i = 0; i < repeat; i++){
        array.push(element)
    }
    console.log(array)
}

repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]