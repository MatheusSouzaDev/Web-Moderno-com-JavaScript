function teste1(num) {
    if (num > 7)
        console.log(num);
    console.log('Final');
}

teste1(6);
teste1(8);

function teste2(num) {
    if (num > 7); { // Cuidado com o ';', não usar com as estruturas de controle
        console.log(num);
    }
}

teste2(5);
teste2(9);