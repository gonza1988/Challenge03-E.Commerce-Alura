const listaProductos = () => fetch('http://localhost:3000/productos').then(respuesta =>respuesta.json());

const crearProducto = (seccion, nombre, precio, image, descripcion) => {
    return fetch(`http://localhost:3000/productos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            seccion,
            nombre,
            precio,
            image,
            descripcion
        })
    })
    .then(respuesta => {
        if(respuesta.ok){
            return respuesta.body;
        }
        throw new Error('No fue posible crear el producto');
    })
}


export const productoServices = {
    listaProductos,
    crearProducto,
}