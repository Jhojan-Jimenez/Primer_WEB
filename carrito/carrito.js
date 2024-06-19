let productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito"))

const contenido = document.querySelector('#main-content')
mostrarProductosCarrito();

function mostrarProductosCarrito() {
    productosEnCarrito.forEach(producto => {
        contenido.innerHTML += `<div class="producto" id="${producto.id}">
                <img src="${producto.img}" alt="" class="img-producto">
                <p>Cantidad <br>${producto.cantidad}</p>
                <p>Precio <br>${producto.valor}</p>
                <p>Subtotal <br>${parseFloat(producto.valor.substring(1))*parseFloat(producto.cantidad)}</p>
                <button><i class="bi bi-trash"></i></button>
            </div>`
    });

}