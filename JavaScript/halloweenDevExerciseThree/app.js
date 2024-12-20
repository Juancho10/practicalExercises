
const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
]

console.log(dream[0][0]);
console.log(dream.length);


//se recorre matriz
for (let row = 0; row < (dream.length); row++) {
    for (let column = 0; column < dream.length; column++) {
        console.log(`fila: ${row} y columna: ${column}`);
        const prueba = dream[row][column] === 1 ? 'true': 'false';
        console.log(`${prueba} = ${dream[row][column]}`);
        
    }
}

//https://www.tldraw.com/r/BJmSf1IdF0KAsfQGsmf5H?d=v-920.154.1920.890.OvYjR8o90IwF1XIKULCYS
/*
function findSafestPath(dream) {

}*/

