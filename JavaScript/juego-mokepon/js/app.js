//variable global
let ataqueJugador;

// funcion para iniciar el juego unicamente cuando se le de clic al boton de seleccionar mascota
function IniciarJuego(){
    let buscarMascota = document.querySelector("#boton-mascota");
    buscarMascota.addEventListener('click', selecionarMascota);

    //logica ataques del juego
    let botonAgua = document.querySelector("#boton-agua");
    botonAgua.addEventListener('clic',ataqueAgua());
    let botonTierra = document.querySelector("boton-tierra");
    botonTierra.addEventListener('clic', ataqueTierra());
    let botonFuego = document.querySelector("#boton-fuego");
    botonFuego.addEventListener('clic', ataqueFuego());
    let botonGreda = document.querySelector("#boton-greda");
    botonGreda.addEventListener('clic', ataqueGreda());
    let botonMadera = document.querySelector("#boton-Madera");
    botonMadera.addEventListener('clic', ataqueMadera());
}

function selecionarMascota() {
    const inputHipodoge = document.querySelector("#hipodoge");
    const inputCapipepo = document.querySelector("#capipepo");
    const inputRatigueya = document.querySelector("#ratigueya");
    const inputTucapalma = document.querySelector("#tucapalma");
    const inputPydos = document.querySelector("#pydos");
    let spanMascotaJugador = document.querySelector ("#mascota-jugador");

    if(inputHipodoge.checked)
        spanMascotaJugador.innerHTML = "Hipodoge";
    else if(inputCapipepo.checked) 
        spanMascotaJugador.innerHTML = "Capipepo";
    else if(inputRatigueya.checked)
        spanMascotaJugador.innerHTML = "Ratigueya";
    else if(inputTucapalma.checked)
        spanMascotaJugador.innerHTML = "Tucapalma";
    else if(inputPydos.checked)
        spanMascotaJugador.innerHTML = "Pydos";
    else
        alert("Debes seleccionar una mascota");

    selectEnemyPet();

}

function selectEnemyPet(){
    let ataqueEnemigo = random(1,5);
    let spanMascotaEnemigo = document.querySelector ('#mascota-enemigo');
    //asignar valores a las mascotas
    if(ataqueEnemigo == 1)
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    else if(ataqueEnemigo ==2)
        spanMascotaEnemigo.innerHTML = "Capipepo";
    else if(ataqueEnemigo == 3)
        spanMascotaEnemigo.innerHTLM = "Ratigueya";
    else if(ataqueEnemigo == 4)
        spanMascotaEnemigo.innerHTML = "Tucapalma";
    else
        spanMascotaEnemigo.innerHTML = "Pydos"
}

function ataqueAgua(){
    ataqueJugador = "AGUA";
    alert(ataqueJugador)
}
function ataqueFuego(){
    ataqueJugador = "FUEGO";
    alert(ataqueJugador);
}
function ataqueTierra(){
    ataqueJugador = "TIERRA";
    alert(ataqueJugador)
}
function ataqueGreda(){
    ataqueJugador = "GREDA";
    alert(ataqueJugador)
}
function ataqueMadera(){
    ataqueJugador = "MADERA";
    alert(ataqueJugador)
}

//create random function
function random(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min);
}

window.addEventListener('load', IniciarJuego); 
