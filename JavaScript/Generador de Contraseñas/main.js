
const numeroCaracteres = document.querySelector('#cantidad');
let botonGenerar = document.querySelector('#generar');
botonGenerar.addEventListener('click', generarPassword);
const cantidad = parseInt(numeroCaracteres.value);

function generarPassword(){
    const cadenaCaracteres = "abcdefghijklmnopqrstuvABCDEFGHIJKLMNOPQRSTUV0123456789";
    console.log(cantidad)
    if(cantidad > 0){
        for(let i=0; i<cantidad;i++){
            console.log(i);
        }
    }
}

function aleatorioCaracter(cadena){
    const endString = cadena.length;
    return Math.floor(Math.random() * endString);
}

console.log(aleatorioCaracter("aassd"))








