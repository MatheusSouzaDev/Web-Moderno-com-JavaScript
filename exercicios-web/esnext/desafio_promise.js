const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
const lerConteudo = path => {
    return new Promise(resolve => {
        fs.readFile(path,
            (_, conteudo) => resolve(conteudo.toString()))
    })
}

lerConteudo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)
