const _ = require('lodash') // o index.js do módulo que faz o chamado do repositório ./lodash
setInterval(() => console.log(_.random(1, 1000)), 2000)