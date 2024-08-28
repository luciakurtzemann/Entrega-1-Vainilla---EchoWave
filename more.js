let botonProductos = document.getElementById("boton-productos");
let botonTiendas = document.getElementById("boton-tiendas");
let botonSobreNosotros = document.getElementById("boton-sobre-la-marca");
let botonIniciarSesion = document.getElementById("iniciar-sesion");

botonProductos.addEventListener("click",listadoProductos);
function listadoProductos(event){
    console.log("Con este botón se accede a la pestaña con todos los productos de EchoWave.");
    event.preventDefault();
}

botonTiendas.addEventListener("click", listadoTiendas);
function listadoTiendas(event){
    console.log("Con este botón se accede a la pestaña con todas las tiendas físicas de EchoWave.");
    event.preventDefault();
}

botonSobreNosotros.addEventListener("click", infoSobreNosotros);
function infoSobreNosotros(event){
    console.log("Con este botón se accede a la pestaña con la información de la marca EchoWave.");
    event.preventDefault();
}

botonIniciarSesion.addEventListener("click", accedeInicioSesion);
function accedeInicioSesion(event){
    console.log("Con este botón el usuario puede acceder a su sesión de EchoWave.");
    event.preventDefault();
}


let botonNewsletter = document.getElementById("newsletter");
let botonContacto = document.getElementById("contacto");
let botonSoporte =document.getElementById("soporte");
let botonPoliticaPrivacidad = document.getElementById("politica-de-privacidad");

botonNewsletter.addEventListener("click", accesoNewsletter);
function accesoNewsletter(event){
    console.log("Con este botón puede ver y suscribir a la newsletter de EchoWave.");
    event.preventDefault();
}

botonContacto.addEventListener("click", infoContacto);
function infoContacto(event){
    console.log("Con este botón se obtienen los modos de contactar con EchoWave.");
    event.preventDefault();
}

botonSoporte.addEventListener("click", infoSoporte);
function infoSoporte(event){
    console.log("Con este botón se accede a la pestaña de soporte de EchoWave, en caso de tener algún problema con la página.");
    event.preventDefault();
}

botonPoliticaPrivacidad.addEventListener("click", infoPoliticaPrivacidad);
function infoPoliticaPrivacidad(event){
    console.log("Con este botón se accede a la política de privacidad de EchoWave.");
    event.preventDefault();
}



let botonReserva = document.getElementById("reserva-producto");
let msjConfirmacionReserva = document.getElementById("msj-confirmacion-reserva");
let msjErrorFaltaElegir = document.getElementById("msj-falta-elegir");

botonReserva.addEventListener("click", ()=>{
    let eleccionColor = document.querySelector("input[name='seleccion-color']:checked");
    if (eleccionColor){
        msjErrorFaltaElegir.style.display= "none";
        let msjReserva = document.createElement("p");
        msjReserva.textContent = "Reserva realizada";
        msjConfirmacionReserva.appendChild(msjReserva);
        let colorElegido = document.createElement("p");
        colorElegido.textContent = "Se encuentra en la lista de espera para recibir el nuevo EchoWave Pulse en color "+ eleccionColor.value +" a partir del 1/10/2024.";
        msjConfirmacionReserva.appendChild(colorElegido);
        msjConfirmacionReserva.style.display= "block";
    } else{
        console.log("Primero se debe seleccionar el color que desea reservar.");
        let faltaElegir = document.createElement("p");
        faltaElegir.textContent = "Para hacer una reserva, primero seleccione el color deseado.";
        msjErrorFaltaElegir.appendChild(faltaElegir);
        msjErrorFaltaElegir.style.display="block";
    }
})