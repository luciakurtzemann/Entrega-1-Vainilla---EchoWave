let botonProductos = document.getElementById("boton-productos");
let botonTiendas = document.getElementById("boton-tiendas");
let botonSobreNosotros = document.getElementById("boton-sobre-la-marca");
let botonIniciarSesion = document.getElementById("iniciar-sesion");

botonProductos.addEventListener("click", listadoProductos);
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