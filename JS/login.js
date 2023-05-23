const loginForm = document.querySelector('#loginForm')
const parrafo = document.getElementById("warnings")
const sessionUser = JSON.parse(localStorage.getItem('validUser'))

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    let warnings = ""
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = users.find(user => user.email === email && user.password === password)
    const sessionActive = [] 

    if(!validUser){
        warnings += `usuario y/o contraseña incorrecto`
        parrafo.innerHTML = warnings
    }
    alert(`bienvenido ${validUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    let activo = true


    sessionActive.push(activo)
    console.log(sessionActive)
    
    sessionStorage.setItem('sesionActiva', JSON.stringify(sessionActive))

    window.location.href = 'panel.html'
})
