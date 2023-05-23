//Si ya estoy logeado, el boton del header que dice iniciarsesion cambia de texto y en lugar de llevar al login lleva al panel propio del usuario.
if(sessionStorage.getItem('sesionActiva') == "[true]"){
    nombreUsuarioHeader.innerHTML = "Mi Cuenta"
} 