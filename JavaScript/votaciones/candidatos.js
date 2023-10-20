let votos = [];

//se realiza la votación agregando votos al array
function votar (candidato) {
    return votos.push(candidato)
}

function contarVotos(){
    let contar = {}
    for(i=0; i< votos.length ; i++){
        let voto = votos[i];
        if(contar[voto] == undefined){
            contar[voto] = 1;
        }else{
            contar[voto]++;
        }
    }
    return contar;
}

votar("candidato 1");
votar("candidato 2");
votar("candidato 1");
votar("candidato 2");

console.log(contarVotos());