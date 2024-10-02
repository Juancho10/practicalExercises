//variable global
let ataqueJugador;
let ataqueEnemigo;


// funcion para iniciar el juego unicamente cuando se le de clic al boton de seleccionar mascota
function IniciarJuego(){
    let buscarMascota = document.querySelector("#boton-mascota");
    buscarMascota.addEventListener('click', selecionarMascota);

    //logica ataques del juego
    let botonAgua = document.querySelector('#boton-agua');
    botonAgua.addEventListener('click',ataqueAgua);
    let botonTierra = document.querySelector("#boton-tierra");
    botonTierra.addEventListener('click', ataqueTierra);
    let botonFuego = document.querySelector("#boton-fuego");
    botonFuego.addEventListener('click', ataqueFuego);
}

function selecionarMascota() {
    const inputHipodoge = document.querySelector("#hipodoge");
    const inputCapipepo = document.querySelector("#capipepo");
    const inputRatigueya = document.querySelector("#ratigueya");
    let spanMascotaJugador = document.querySelector ("#mascota-jugador");

    if(inputHipodoge.checked)
        spanMascotaJugador.innerHTML = "Hipodoge";
    else if(inputCapipepo.checked) 
        spanMascotaJugador.innerHTML = "Capipepo";
    else if(inputRatigueya.checked)
        spanMascotaJugador.innerHTML = "Ratigueya";
    else
        alert("Debes seleccionar una mascota");

    selectEnemyPet();

}

function selectEnemyPet(){
    let mascotaEnemigo = random(1,3);
    let spanMascotaEnemigo = document.querySelector ('#mascota-enemigo');
    //asignar valores a las mascotas
    if(mascotaEnemigo == 1)
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    else if(mascotaEnemigo == 2)
        spanMascotaEnemigo.innerHTML = "Capipepo";
    else
        spanMascotaEnemigo.innerHTLM = "Ratigueya";
    
}

function ataqueAleatorioEnemigo(){
    let randomAtaque = random(1,5);
    
    if (randomAtaque == 1) {
        ataqueEnemigo = "FUEGO";
        console.log("FUEGO");
    } else if(randomAtaque == 2){
        ataqueEnemigo = "AGUA";
        console.log("AGUA");
    }else{
        ataqueEnemigo = "TIERRA"
        console.log("TIERRA");
    }
    battleRoyal();
}

function ataqueAgua(){
    ataqueJugador = "AGUA";
    console.log(ataqueJugador);
    ataqueAleatorioEnemigo();
}

function ataqueTierra(){
    ataqueJugador = "TIERRA";
    console.log(ataqueJugador);
    ataqueAleatorioEnemigo()
}
function ataqueFuego(){
    ataqueJugador = "FUEGO";
    console.log(ataqueJugador);
    ataqueAleatorioEnemigo()
}
function battleRoyal(){
    if(ataqueJugador == ataqueEnemigo){
        console.log("empate");
    }else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA" || ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO" || ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        gameMessage("GANASTE");
    }else{
        gameMessage("PERDISTE");
    }
}

function gameMessage(resultBattle){
    let sectionMessage = document.querySelector('#mensajes');
    
    let message = document.createElement('p');

    message.innerHTML= "Estas atacando con "+ ataqueJugador +" tu enemigo esta atacando con "+ ataqueEnemigo + " resultado " + resultBattle;

    sectionMessage.appendChild(message);
}

//create random function
function random(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min);
}

window.addEventListener('load', IniciarJuego); 
