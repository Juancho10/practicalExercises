alert("hola, mundo cruel");

// funcion para iniciar el juego unicamente cuando se le de clic al boton de seleccionar mascota
function IniciarJuego(){
    let buscarMascota = document.querySelector("#boton-mascota");
    buscarMascota.addEventListener('click', selecionarMascota);
}

function selecionarMascota() {
    const inputHipodoge = document.querySelector("#hipodoge");
    const inputCapipepo = document.querySelector("#capipepo");
    const inputRatigueya = document.querySelector("#ratigueya");
    const inputTucapalma = document.querySelector("#tucapalma");
    const inputPydos = document.querySelector("#pydos");
    let spanMascotaJugador = document.querySelector ("#mascota-jugador");

    if(inputHipodoge.checked)
        return spanMascotaJugador.innerHTML = "Hipodoge";
    else if(inputCapipepo.checked) 
        return spanMascotaJugador.innerHTML = "Capipepo";
    else if(inputRatigueya.checked)
        return spanMascotaJugador.innerHTML = "Ratigueya";
    else if(inputTucapalma.checked)
        return spanMascotaJugador.innerHTML = "Tucapalma";
    else if(inputPydos.checked)
        return spanMascotaJugador.innerHTML = "Pydos";
    else
        return alert("Debes seleccionar una mascota");
}

window.addEventListener('load', IniciarJuego); 
