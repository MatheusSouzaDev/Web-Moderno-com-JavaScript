const recerberMelhorEstudante = estudantes => {
    let result = {}
    Object.entries(estudantes)
        .forEach(element => {
            const nome = 0
            const notas = 1
            let media = element[notas].reduce((ac, x) => ac + x) / element[notas].length
            
            if (!result.media || media >= result.media) {
                result.nome = element[nome]
                result.media = media
            }
        });
    console.log(result)
}


recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }