let comparaComThis = function (frase, param) {
    console.log(frase, this === param) // se o parametro é estritamente igual ao this
    
}

comparaComThis('This é global: ', global) // true
comparaComThis('This é o this: ', this) // false

const obj = {}
comparaComThis = comparaComThis.bind(obj) // this aponta para o obj
comparaComThis('This é global: ',global) // false
comparaComThis('This é o obj: ',obj) // true

let comparaComThisArrow = (frase, param) => console.log(frase, this === param) // se o parametro é estritamente igual ao this usando arrow
comparaComThisArrow('This é global: ',global) // false
comparaComThisArrow('This é this: ',this) // true
comparaComThisArrow('This é module.exports: ',module.exports) // true

comparaComThisArrow = comparaComThisArrow.bind(obj) // usando bind no arrow
comparaComThisArrow('This é o obj: ', obj) // false, o this não varia mesmo utilizando bind
comparaComThisArrow('This é module.exports: ', module.exports) // true