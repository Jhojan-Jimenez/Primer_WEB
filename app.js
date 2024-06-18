const Productos =[{
    id:"Producto-1",
    name:"Producto-1",
    img: "assets/imgs/Camisa.webp",
    valor:"$20000",
    tipo: "Camisa"
},
{
    id:"Producto-2",
    name:"Producto-2",
    img: "assets/imgs/Pantalon.webp",
    valor:"$15000",
    tipo: "Pantalon"
},
{
    id:"Producto-3",
    name:"Producto-3",
    img: "assets/imgs/Zapatos.png",
    valor:"$18000",
    tipo: "Zapatos"
},
{
    id:"Producto-4",
    name:"Producto-4",
    img: "assets/imgs/Camisa.webp",
    valor:"$20000",
    tipo: "Camisa"
},
{
    id:"Producto-5",
    name:"Producto-5",
    img: "assets/imgs/Pantalon.webp",
    valor:"$15000",
    tipo: "Pantalon"
},
{
    id:"Producto-6",
    name:"Producto-6",
    img: "assets/imgs/Zapatos.png",
    valor:"$18000",
    tipo: "Zapatos"
},
{
    id:"Producto-7",
    name:"Producto-7",
    img: "assets/imgs/Camisa.webp",
    valor:"$20000",
    tipo: "Camisa"
},
{
    id:"Producto-8",
    name:"Producto-8",
    img: "assets/imgs/Pantalon.webp",
    valor:"$15000",
    tipo: "Pantalon"
},
{
    id:"Producto-9",
    name:"Producto-9",
    img: "assets/imgs/Zapatos.png",
    valor:"$18000",
    tipo: "Zapatos"
},]

if (document.referrer !== '') {
    let usuario = document.createElement('p');
    let header = document.querySelector('header')
    header.append(usuario)
    usuario.id = "usuario"
    usuario.innerText = 'Bienvenido querido Usuario'
}

const menuProductos = document.querySelector("#main-content");


mostrarProductos(Productos);

const btn_todo = document.querySelector("#mostrar_todo")
const btn_camisas = document.querySelector("#solo_camisas")
const btn_pantalones = document.querySelector("#solo_pantalones")
const btn_zapatos = document.querySelector("#solo_zapatos")

btn_todo.addEventListener('click', () => mostrarProductos(Productos));
btn_camisas.addEventListener('click', () => mostrarProductos(productosFiltrados(Productos, "Camisa")));
btn_pantalones.addEventListener('click', () => mostrarProductos(productosFiltrados(Productos, "Pantalon")));
btn_zapatos.addEventListener('click', () => mostrarProductos(productosFiltrados(Productos, "Zapatos")));


function mostrarProductos(productos) {
    menuProductos.innerHTML = "";
    productos.forEach(producto => {
        let productico = document.createElement('div');
        menuProductos.appendChild(productico);
        productico.className = "producto";

        productico.appendChild(document.createElement('h2')).innerText = producto.name;
        productico.appendChild(document.createElement('img')).src = producto.img;
        productico.appendChild(document.createElement('p')).innerText = producto.valor;

        let boton = document.createElement('input');
        boton.type = "button";
        boton.value = "Agregar al Carrito";
        productico.appendChild(boton);
    });
}

// Este fue mi codigo, el de abajo es el de Chat, eso era lo que queria hacer
// function productosFiltrados(productos,tipo) {
    
//     let productosFiltrados = productos.filter(function (producto){
//         return producto.tipo == tipo
//     })
//     return productosFiltrados;
    
// }


function productosFiltrados(productos, tipo) {
    return productos.filter(producto => producto.tipo === tipo);
}
