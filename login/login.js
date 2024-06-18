const correo = document.querySelector('#correo')
const contraseña = document.querySelector('#contraseña')
const btn_log = document.querySelector('#login')
btn_log.addEventListener('click',buscarUsuario)
const btn_contraseña = document.querySelector('#ver_contraseña')

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
        Swal.fire({
            title: "Acceso Invalido",
            text: "No estas registrado o ingresaste mal tus datos",
            icon: "error"
          });
    }
    
    
}
btn_contraseña.addEventListener('click',cambiarType)
function cambiarType(e){
    e.preventDefault();
    contraseña.type == 'password'? contraseña.type = 'text': contraseña.type = 'password';
}