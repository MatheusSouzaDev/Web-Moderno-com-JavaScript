const receberSomenteOsParesDeIndicesPares = 
    arr => console.log(
        arr.filter((val, ind) => val % 2 == 0 && ind % 2 ==0)
    )

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]