function listadoNumeros(numInicial,numFinal) {
    while(numInicial<=numFinal){
        let num = numInicial++;
        if(num % 3 === 0){
            console.log("Fizz");
        }else if(num % 5 === 0){
            console.log("Buzz");
        }else if(num % 3 === 0 && numInicial % 5 ===0){
            console.log("FizzBuzz")
        }else{
            console.log(num);
        }
    }
}

console.log(listadoNumeros(1,20));

