let a = 3;
var b = 2;

global.c = 123;

this.d = 456;
this.e = false;
this.f = 'teste';

console.log(a);
console.log(global.b);
console.log(global.c);
console.log(this.d);
console.log(module.exports.d);
console.log(module.exports === this);
console.log(module.exports);

// Criando uma variavel maluca: sem var e let!
abc = 3; // Não fazer isso em casa, pois está criando variável dentro do Node.js
console.log(global.abc);

// module.exports = { e: 456, f: false, g: 'teste' }