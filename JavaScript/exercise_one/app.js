/**
 * 
let resultado = 0;

while(resultado < 11){
    resultado++
    console.log(resultado);
}
 * 
 */

let numeroA = 31;
let numeroB = 1;

let resultado = numeroA+numeroB;

let modulo = resultado / 2;
//console.log(modulo)
// convertir a binario
//console.log(resultado);
while(resultado > 1){
    resultado = parseInt(resultado / 2);

    console.log(resultado+ "\n");
    modulo = resultado % 2;
    //console.log(modulo);
    //return modulo;
}
//console.log(modulo)
 