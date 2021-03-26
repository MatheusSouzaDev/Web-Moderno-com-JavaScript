const buscarPalavrasSemelhantes = (procurar, arr) =>
    console.log(arr.filter(elm => elm.includes(procurar)))


buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []