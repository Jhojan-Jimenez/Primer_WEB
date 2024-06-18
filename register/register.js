
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
        alert('Solo ingrese letras en Nombres y Apellidos')
    }else{
        const nuevoUsuario = crearUsuario(nombres.value,apellidos.value,correo.value,contraseña.value)
        usuarios.push(nuevoUsuario);
        alert("Te has registrado Correctamente")
        localStorage.setItem("Usuarios",JSON.stringify(usuarios))
        window.location.href = '../index.html';
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


