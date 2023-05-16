const datosViaje = JSON.parse(localStorage.getItem('datosViaje'))

console.log(datosViaje)
console.log(datosViaje.fechaIda)
console.log(datosViaje.fechaVuelta)
console.log(datosViaje.lugarDestino)

console.log(`bienvenido ${datosViaje.fechaIda}`)
console.log(`bienvenido ${datosViaje.fechaVuelta}`)
console.log(`bienvenido ${datosViaje.lugarDestino}`)
console.log(`bienvenido ${datosViaje.lugarOrigen}`)

