const correo = document.querySelector('#correo')
const contraseña = document.querySelector('#contraseña')
const btn_log = document.querySelector('#login')
btn_log.addEventListener('click',buscarUsuario)

let usuarios = JSON.parse(localStorage.getItem("Usuarios"))

function buscarUsuario(e) {
    e.preventDefault();
    let estar = false;
    for (const usuario of usuarios) {
        if(correo.value == usuario.correo && contraseña.value == usuario.contraseña){
            estar = true;
            window.location.href = '../index.html';
            break;
            
        }
    }
    if(!estar){
        alert("No estas registrado")
    }
    
    
}