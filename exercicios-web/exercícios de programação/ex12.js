const removerPropriedade = (obj, rem) => {
    let cp = {...obj}
    delete cp[rem]
    console.log(cp)
}

removerPropriedade({
    a: 1,
    b: 2
}, "a") // retornará {b: 2}
removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}