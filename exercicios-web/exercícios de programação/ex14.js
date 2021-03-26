const objetoParaArray = obj => {
    let res = []
    for (let key in obj)
        res.push([key, obj[key]])
    
    console.log(res)
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]

objetoParaArray({
    codigo: 11111,
    preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]