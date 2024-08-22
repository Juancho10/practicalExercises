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
    let botonGreda = document.querySelector("#boton-greda");
    botonGreda.addEventListener('click', ataqueGreda);
    let botonMadera = document.querySelector("#boton-madera");
    botonMadera.addEventListener('click', ataqueMadera);
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
    let mascotaEnemigo = random(1,5);
    let spanMascotaEnemigo = document.querySelector ('#mascota-enemigo');
    //asignar valores a las mascotas
    if(mascotaEnemigo == 1)
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    else if(mascotaEnemigo ==2)
        spanMascotaEnemigo.innerHTML = "Capipepo";
    else if(mascotaEnemigo == 3)
        spanMascotaEnemigo.innerHTLM = "Ratigueya";
    else if(mascotaEnemigo == 4)
        spanMascotaEnemigo.innerHTML = "Tucapalma";
    else
        spanMascotaEnemigo.innerHTML = "Pydos"
}

function ataqueAleatorioEnemigo(){
    let randomAtaque = random(1,5);
    
    if (randomAtaque == 1) {
        ataqueEnemigo = "FUEGO";
        console.log("FUEGO");
    } else if(randomAtaque == 2){
        ataqueEnemigo = "AGUA";
        console.log("AGUA");
    }else if(randomAtaque == 3){
        ataqueEnemigo = "TIERRA"
        console.log("TIERRA");
    }else if(randomAtaque == 4){
        ataqueEnemigo = "GREDA";
        console.log("GREDA");
    }else{
        ataqueEnemigo = "MADERA"
        console.log("MADERA")
    }
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
function ataqueGreda(){
    ataqueJugador = "GREDA";
    console.log(ataqueJugador);
    ataqueAleatorioEnemigo()
}
function ataqueMadera(){
    ataqueJugador = "MADERA";
    console.log(ataqueJugador);
    ataqueAleatorioEnemigo()
}

//create random function
function random(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min);
}

window.addEventListener('load', IniciarJuego); 
