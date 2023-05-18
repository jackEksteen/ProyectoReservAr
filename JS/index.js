var formulario = document.getElementById("formulario")
var lugarOrigen = document.getElementById("lugarOrigen")
var lugarDestino = document.getElementById("lugarDestino")
var fechaIda = document.getElementById("fechaIda")
var fechaVuelta = document.getElementById("fechaVuelta")
var cantidad = document.getElementById("cantidadPasaje")

alert("DALE LIVESERVER DEJATE DE JODER")

function soloIda(){
    console.log("???")
    let inputVuelta = document.querySelector("#fechaVuelta")
    inputVuelta.setAttribute('disabled','')
    console.log("se aprieta boton solo ida, se deshabilita el input de vuelta")
}

function idaVuelta(){
    let inputVuelta = document.querySelector("#fechaVuelta")
    inputVuelta.removeAttribute('disabled','')
    console.log("se aprieta boton solo ida, se borra el disabled de soloida")
}

formulario.addEventListener("submit",function(event){
    event.preventDefault()
    verificado = true


    if(lugarOrigen.value == lugarDestino.value){
        verificado = false
        alert("no puede viajar al mismo lugar")
    }
    if(fechaIda.value == fechaVuelta.value){
        verificado = false
        alert("no puede viajar el mismo día")
    }
    if(verificado==true){
        const datosViaje = []
        datosViaje.push({
            fechaVuelta:fechaVuelta.value, 
            fechaIda:fechaIda.value,
            lugarOrigen:lugarOrigen.value,
            lugarDestino:lugarDestino.value,
            pasajes:cantidadPasaje.value
        })
        console.log(datosViaje)
        console.log("valido OK")
        localStorage.setItem('datosViaje', JSON.stringify(datosViaje))
        window.location.href= 'buscador.html'

        }

})

