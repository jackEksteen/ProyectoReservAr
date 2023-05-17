const parrafo = document.getElementById("warnings")
const signupForm = document.querySelector("#form")


signupForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML = ""
    
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    if(mailformat.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(password.length < 4){
        warnings += `contraseña muy corta <br>`
        entrar = true
    }
    if(name.length <3){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }

    if(entrar){
        warnings += `El nombre no es valido <br>`
    }else{
        
    const users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = users.find(user => user.email === email)
    if(isUserRegistered){
        warnings += `el usuario ya esta registrado <br>`
        parrafo.innerHTML = warnings
    }

    users.push({name: name, email: email, password: password})
   
    localStorage.setItem('users', JSON.stringify(users))
    alert('registo exitoso')
    window.location.href= 'login.html'
    }
})