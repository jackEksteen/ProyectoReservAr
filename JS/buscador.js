const datosViajejson = JSON.parse(localStorage.getItem('datosViaje'))

var datosViaje = datosViajejson[0]

console.log(datosViaje)
//console.log(datosViajejson[0]);

console.log(`fecha de ida: ${datosViaje.fechaIda}`)
console.log(`fecha de vuelta: ${datosViaje.fechaVuelta}`)
console.log(`origen: ${datosViaje.lugarOrigen}`)
console.log(`destino: ${datosViaje.lugarDestino}`)


