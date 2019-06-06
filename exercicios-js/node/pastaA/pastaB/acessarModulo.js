const moduloA = require('../../moduloA') // respeitar as letras maiúsculas e minúsculas
console.log(moduloA.ola)

// é possível criar um modulo do node e chamar ele 
/*const saudacao = require('saudacao')
console.log(saudacao.ola)*/

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
	res.write('Bom dia!')
	res.end()
}).listen(8080)