const datosViajeArray = JSON.parse(localStorage.getItem('datosViaje'))

//var datosViaje = datosViajejson[0]
var datosViaje = datosViajeArray[datosViajeArray.length - 1]

console.log("ACTUALIZA")

console.log(datosViaje)
console.log(datosViajeArray);

// console.log(`fecha de ida: ${datosViaje.fechaIda}`)
// console.log(`fecha de vuelta: ${datosViaje.fechaVuelta}`)
// console.log(`origen: ${datosViaje.lugarOrigen}`)
// console.log(`destino: ${datosViaje.lugarDestino}`)

let elementoIda = document.querySelector("#fechaIdaRes")
let contenidoIda = document.createTextNode(datosViaje.fechaIda)
elementoIda.appendChild(contenidoIda)

let elementoVuelta = document.querySelector("#fechaVueltaRes")
let contenidoVuelta = document.createTextNode(datosViaje.fechaVuelta)
elementoVuelta.appendChild(contenidoVuelta)

let elementoOrigen = document.querySelector("#lugarOrigenRes")
let contenidoOrigen = document.createTextNode(datosViaje.lugarOrigen)
elementoOrigen.appendChild(contenidoOrigen)

let elementoDestino = document.querySelector("#lugarDestinoRes")
let contenidoDestino = document.createTextNode(datosViaje.lugarDestino)
elementoDestino.appendChild(contenidoDestino)

let elementoBoletos = document.querySelector("#cantidadPasajeRes")
let contenidoBoletos = document.createTextNode(datosViaje.pasajes)
elementoBoletos.appendChild(contenidoBoletos)



// console.log(contenidoBoletos)



