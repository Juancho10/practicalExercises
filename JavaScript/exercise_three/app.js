
function multiplicar(numero,maximo){
    
    for(i=0;i<=maximo;i++){
        let resultado = numero * i;
        console.log(numero+" * "+i+" = "+ resultado);
    }
    
}

console.log(multiplicar(4,50));
/*let numero = 2;
for (i=0; i<11; i++){
    let resultado1 = numero * i;
    console.log(numero+" * "+i+" = "+ resultado1);
    //console.log("el numero i es: "+ i);
    for(j=0; j<11; j++){
        //console.log("el numero j es: "+j);
        let resultado = i * j;
        console.log(i+" * "+j+" = "+ resultado);
    }
}*/