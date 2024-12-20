
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
        console.log(dream[row][column]);
    }
}

/*
function findSafestPath(dream) {

}*/

