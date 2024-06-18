
let usuarios = JSON.parse(localStorage.getItem("Usuarios"))

if(usuarios==null){
    usuarios = []
}

const nombres = document.querySelector('#nombre');
const apellidos = document.querySelector('#apellidos');
const correo = document.querySelector('#correo');
const contraseña = document.querySelector('#contraseña');
const btn_registrar =document.querySelector('#register');

btn_registrar.addEventListener('click',registrarUsuario);

const soloLetras = /^[a-zA-Z]+$/;

function registrarUsuario(e){
    e.preventDefault();
    if (!(soloLetras.test(nombres.value) && soloLetras.test(apellidos.value))) {
        Swal.fire({
            title: 'Error!',
            text: 'Porfavor, solo ingresa letras en Nombres y Apellidos',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }else{
        Swal.fire({
            title: 'Excelente',
            text: 'Te has registrado correctamente',
            icon: 'success',
            confirmButtonText: 'Continuar',
        }).then((result) => {
            const nuevoUsuario = crearUsuario(nombres.value,apellidos.value,correo.value,contraseña.value)
            usuarios.push(nuevoUsuario);
            
            localStorage.setItem("Usuarios",JSON.stringify(usuarios))
            window.location.href = '../index.html';
          });
        
    }
}
function crearUsuario(nombres, apellidos, correo, contraseña) {
    return {
        nombres,
        apellidos,
        correo,
        contraseña,
    }
}


