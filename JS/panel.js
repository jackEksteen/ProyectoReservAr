//MEDIDA DE SEGURIDAD
//Primero chequea que el usuario este en una sesion activa, sino lo manda a logearse

if(sessionStorage.getItem('sesionActiva') == "[true]"){
    console.log("autorizado");
} else{
    window.location.href = 'login.html'
}

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

//traigo y muestro todas las compras hechas por el usuario
const comprasArray = JSON.parse(localStorage.getItem('comprasRealizadas'))
let comprasUser = comprasArray.filter(user => user.comprador === sesionArray.email)
console.log(comprasUser[0]);
console.log(comprasUser[2])
var count = Object.keys(comprasUser).length;


let contenedorCompras = `
<div class="contenedorCompras">
`

//se avisa que no ha comprado nada todavia
if(count == 0){ 
    console.log("entro");
    contenedorCompras = contenedorCompras + `<p class="">Aun no ha realizado ninguna compra</p>`
    document.querySelector("#contenedorcajas").innerHTML=contenedorCompras
}

//itero por cada compra que ha realizado el usuario
for (let i = 0; i < count; i++) {
    var url = ""
    var empresa = ""
    if(comprasUser[i].empresa === "Aerolineas_Arg"){
        url = "./CSS/imagenes/Logo-AerolineasArgentinas-ok-600x600.jpg"
        empresa = "Aerolineas Argentina"
    }
    if(comprasUser[i].empresa === "Latam"){
        url = "./CSS/imagenes/Logo_latam.jpg"
        empresa = "Latam Airlines"
    }

    contenedorCompras = contenedorCompras + `
    <div class="compras">
     <img src="${url}" style="height: 70px;width: 100px;padding: 0;margin: 1%;min-width: 100px;min-height: 70px;">
     <ul class="detallesCompra">
        <li>fecha de ida: <SPAN id="fechaIdaCompra">${comprasUser[i].fecha_ida}</SPAN></li>
        <li>Fecha de regreso: <span id="fechaVueltaCompra">${comprasUser[i].fecha_vuelta}</span></li>
        <li>Lugar de Origen: <span id="lugarOrigenCompra">${comprasUser[i].lugar_origen}</span></li>
        <li>Lugar de Destino: <span id="lugarDestinoCompra">${comprasUser[i].lugar_destino}</span></li>
        <li>Cantidad de Pasajes: <span id="cantidadPasajeCompra">${comprasUser[i].cantidad_pasajes}</span></li>
        <li>Empresa: <span id="empresa">${empresa}</span></li>
     </ul>
     <p class="precioBoletos" id="totalBoletos">$${comprasUser[i].precio_pasaje}</p>
    </div>
    `
}
document.querySelector("#contenedorcajas").innerHTML=contenedorCompras