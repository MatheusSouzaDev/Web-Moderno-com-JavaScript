const fabricantes = ['Mercedes', 'Audi', 'BMW']

// uma função que recebe os parâmetros do array e imprime com seu indice
function imprimir(nome, indice) {
    console.log(`${indice + 1}.${nome}`)    
}

// para cada elemento que o forEach achar no array ele chamará a função imprimir (callback)
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante)) // callback com uma função arrow