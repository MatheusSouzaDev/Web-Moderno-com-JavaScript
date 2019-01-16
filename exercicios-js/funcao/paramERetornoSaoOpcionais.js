function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permetido: ${area}m².`);
    } else {
        return area;
    }
}

console.log(area(2, 2));
console.log(area(2));
console.log(area());
console.log(area(2, 3, 17, 22, 44)); // pega os 2 primeiros e o resto ignora, mas não da erro
console.log(area(5, 5));