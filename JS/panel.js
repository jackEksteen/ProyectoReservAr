// Primero chequea que el usuario este en una sesion activa, sino lo manda a logearse
// if(sessionStorage.getItem('sesionActiva') == "[true]"){
//     console.log("autorizado");
// } else{
//     window.location.href = 'login.html'
// }

//funcion para cerrar sesion
function cerrarSesion(){
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

//traigo los datos de sus compras
const comprasArray = JSON.parse(localStorage.getItem('comprasRealizadas')) 
const comprasUser = comprasArray.filter(user => user.comprador === sesionArray.email)

console.log(comprasUser);




