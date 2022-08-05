import { productoServices } from "../servicios/productos-servicios.js";

const form = document.querySelector('[data-form]');
form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const image = document.querySelector('[data-url]').value;
    const seccion = document.querySelector('[data-categoria]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;

    productoServices.crearProducto(seccion, nombre, precio, image, descripcion).then(respuesta =>{
        window.location.href = '/index.html';
        alert('El producto fue creado correctamente');
        console.log(respuesta);

    }) .catch(err => {
        console.log(err);
    })

});
