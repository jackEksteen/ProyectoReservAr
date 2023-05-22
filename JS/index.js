var formulario = document.getElementById("formulario")
var lugarOrigen = document.getElementById("lugarOrigen")
var lugarDestino = document.getElementById("lugarDestino")
var fechaIda = document.getElementById("fechaIda")
var fechaVuelta = document.getElementById("fechaVuelta")
var cantidad = document.getElementById("cantidadPasaje")
var botonIdaVuelta = document.querySelector("#der")
var soloIdaCheck = false
const parrafoDestino = document.getElementById("warningsDestino")
const parrafoFecha = document.getElementById("warningsFecha")


//funciones de los botones
function idaVueltaFunc(){
    let inputVuelta = document.querySelector("#fechaVuelta")
    inputVuelta.removeAttribute('disabled','')
    console.log("se aprieta boton ida y vuelta, se borra el disabled de soloida") 
    soloIdaCheck = false
}

function soloIdaFunc(){
    let inputVuelta = document.querySelector("#fechaVuelta")
    inputVuelta.setAttribute('disabled','')
    inputVuelta.value = null;
    console.log("se aprieta boton solo ida, se deshabilita el input de vuelta")
    soloIdaCheck = true
}
function seleccionarBoton(){
    botonIdaVuelta.click()
    //se selecciona una fecha de vuelta y se activa automaticamente el boton ida vuelta
}

//ingreso de datos al formulario
formulario.addEventListener("submit",function(event){
    event.preventDefault()
    verificado = true
    let warningsDestino = ""
    let warningsFecha = ""
    parrafoFecha.innerHTML = warningsFecha
    parrafoDestino.innerHTML = warningsDestino

    //Valida que no se viaje al mismo lugar
    if(lugarOrigen.value == lugarDestino.value){
        verificado = false
        warningsDestino += `no puede viajar al mismo lugar`
        parrafoDestino.innerHTML = warningsDestino
    }
    //valida que no viaje el mismo día
    if(fechaIda.value == fechaVuelta.value ){
        verificado = false
        warningsFecha += `no puede viajar el mismo día`
        parrafoFecha.innerHTML = warningsFecha
    }
    //valida que no viaje al pasado 
    if(fechaIda.value > fechaVuelta.value && soloIdaCheck == false ){
        verificado = false
        warningsFecha += `no puede viajar al pasado`
        parrafoFecha.innerHTML = warningsFecha
    }
    


    //ingreso de datos correctos. Lo pushea al array, lo guarda en formato json en local storage. y redirige a pagina de busqueda
    if(verificado==true){
        const datosViaje = []
        datosViaje.push({
            fechaVuelta:fechaVuelta.value, 
            fechaIda:fechaIda.value,
            lugarOrigen:lugarOrigen.value,
            lugarDestino:lugarDestino.value,
            pasajes:cantidadPasaje.value,
            soloIda:soloIdaCheck
        })
        console.log(datosViaje)
        console.log("valido OK")
        localStorage.setItem('datosViaje', JSON.stringify(datosViaje))
        window.location.href= 'buscador.html'
        }

})


