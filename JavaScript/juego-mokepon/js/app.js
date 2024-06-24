alert("hola, mundo cruel");

function selecionarMascota() {
    return alert("Mascota Seleccionada")
}
let buscarMascota = document.querySelector("#boton-mascota");
buscarMascota.addEventListener('click', selecionarMascota);