// Primero chequea que el usuario este en una sesion activa, sino lo manda a logearse
// if(sessionStorage.getItem('sesionActiva') == "[true]"){
//     console.log("autorizado");
// } else{
//     window.location.href = 'login.html'
// }

//funcion para cerrar sesion
function cerrarSesion() {
    sessionStorage.clear()
    window.location.href = 'login.html'
}

//traigo los datos del usuario actualmente logeado
const sesionArray = JSON.parse(localStorage.getItem('login_success'))

let elementoSaludo = document.querySelector("#saludoUsuario")
let contenidoSaludo = document.createTextNode(sesionArray.name)
elementoSaludo.appendChild(contenidoSaludo)

let elementoNombre = document.querySelector("#nombreUsuario")
let contenidoNombre = document.createTextNode(sesionArray.name)
elementoNombre.appendChild(contenidoNombre)

let elementoMail = document.querySelector("#datosUsuarioMail")
let contenidoMail = document.createTextNode(sesionArray.email)
elementoMail.appendChild(contenidoMail)

let elementoFechaNac = document.querySelector("#fechaNacimiento")
let contenidoFechaNac = document.createTextNode(sesionArray.nacimiento)
elementoFechaNac.appendChild(contenidoFechaNac)

//traigo todas las compras hechas por el usuario
const comprasArray = JSON.parse(localStorage.getItem('comprasRealizadas'))
let comprasUser = comprasArray.filter(user => user.comprador === sesionArray.email)
console.log(comprasUser[0]);
console.log(comprasUser[2])
var count = Object.keys(comprasUser).length;

let contenedorCompras = `
<div class="contenedorCompras">
`


for (let i = 0; i < count; i++) {

    let elementoIda = document.querySelector("#fechaIdaCompra")
    let contenidoIda = document.createTextNode(comprasUser[i].fecha_ida)
    elementoIda.appendChild(contenidoIda)

    let elementoVuelta = document.querySelector("#fechaVueltaCompra")
    let contenidoVuelta = document.createTextNode(comprasUser[i].vuelta)
    elementoVuelta.appendChild(contenidoVuelta)

    let elementoOrigen = document.querySelector("#lugarOrigenCompra")
    let contenidoOrigen = document.createTextNode(comprasUser[i].lugarOrigen)
    elementoOrigen.appendChild(contenidoOrigen)

    let elementoDestino = document.querySelector("#lugarDestinoCompra")
    let contenidoDestino = document.createTextNode(comprasUser[i].lugar_destino)
    elementoDestino.appendChild(contenidoDestino)

    let elementoBoletos = document.querySelector("#cantidadPasajeCompra")
    let contenidoBoletos = document.createTextNode(comprasUser[i].lugar_destino)
    elementoBoletos.appendChild(contenidoBoletos)

    let elementoEmpresa = document.querySelector("#empresa")
    let contenidoEmpresa = document.createTextNode(comprasUser[i].empresa)
    elementoEmpresa.appendChild(contenidoEmpresa)

    let elementoPrecio = document.querySelector("#totalBoletos")
    let contenidoPrecio = document.createTextNode(comprasUser[i].precio_pasaje)
    elementoPrecio.appendChild(contenidoPrecio)


    contenedorCompras = contenedorCompras + `
    <div class="compras">
     <img src="" style="height: 70px;width: 100px;padding: 0;margin: 1%;min-width: 100px;min-height: 70px;">
     <ul class="detallesCompra">
        <li>fecha de ida: <SPAN id="fechaIdaCompra">${comprasUser[i].fecha_ida}</SPAN></li>
        <li>Fecha de regreso: <span id="fechaVueltaCompra">${comprasUser[i].vuelta}</span></li>
        <li>Lugar de Origen: <span id="lugarOrigenCompra">${comprasUser[i].lugarOrigen}</span></li>
        <li>Lugar de Destino: <span id="lugarDestinoCompra">${comprasUser[i].lugar_destino}</span></li>
        <li>Cantidad de Pasajes: <span id="cantidadPasajeCompra">${comprasUser[i].lugar_destino}</span></li>
        <li>Empresa: <span id="empresa">${comprasUser[i].empresa}</span></li>
     </ul>
     <p class="precioBoletos" id="totalBoletos">$${comprasUser[i].precio_pasaje}</p>
    </div>
    `
}
document.querySelector("#contenedorcajas").innerHTML=contenedorCompras