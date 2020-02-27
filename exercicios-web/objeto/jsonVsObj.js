// Formato textual genérica que é útil para comunicação entre 2 sistemas de linguagens diferentes
// Texto vs Objeto
const obj = {a: 1, b: 2, c: 3, soma() {return a + b+ c}}
console.log(JSON.stringify(obj)) // Object to JSON

// JSON to Object
// console.log(JSON.parse("{a: 1, b: 2, c: 3}")) erro de síntaxe por não delimitar as chaves sem aspas duplas
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) erro de síntaxe por delimitar as chaves com aspas simples
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // forma correta
console.log(JSON.parse('{"a": 1.7, "b": "String", "c": true, "d": { "d1": false }, "e": [{"e11": 1, "e12": 2}, "e2"]}')) // forma correta