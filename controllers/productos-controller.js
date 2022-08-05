import { productoServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (nombre, precio, image) => {

    const productoItem = document.createElement('div');
    const contenido = `
        <div>
            <img class="productos__item_img" src=${image} alt="Producto1">
            <h3 class="productos__item__titulo">${nombre}</h3>
            <p class="productos__item__precio">${precio}</p>
            <button class="productos__item__btn">Ver Producto</button> 
        </div>
        ` ;

        productoItem.innerHTML = contenido;
        productoItem.classList.add("productos__item");
        return productoItem;
};

const productos = document.querySelector('[datos-productos]');

const render = async() => { 
    try {
        const listaProductos = await productoServices.listaProductos(); //espera una promesa
        listaProductos.forEach(elemento => {
            productos.appendChild(nuevoProducto(elemento.nombre, elemento.precio, elemento.image));
        });

    } catch(error) {
        console.log(error);
    }
}

render()