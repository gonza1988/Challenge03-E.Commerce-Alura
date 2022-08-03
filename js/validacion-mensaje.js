const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    })
});

function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid) { //comparo si el valor del input es válido
        input.parentElement.classList.remove('contacto__input__container--invalid'); //remuevo de la clase padre el estilo de 'invalid'
        input.parentElement.querySelector('.input-message-error').innerHTML = ''; //dejo vacío la clase 'span' del padre de mensaje de error
    } else {
        input.parentElement.classList.add('contacto__input__container--invalid'); //agrego de la clase padre el estilo de 'invalid'
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    'valueMissing'
];

const mensajesDeError = {
    nombre: {
        valueMissing: 'El campo nombre no puede estar vacío y debe tener un máximo de 40 caracteres'
    },
    mensaje: {
        valueMissing: 'El campo mensaje no puede estar vacío debe tener un máximo de 120 caracteres',
    }
}


function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = '';

    tipoDeErrores.forEach(error => {
        if(input.validity[error]){
        mensaje = mensajesDeError[tipoDeInput][error]; //convierto a la variable mensaje al tipo de error y con su mensaje respectivo de error
        }
    });

    return mensaje;
}


const formularioMensaje = document.querySelector("[data-form-contacto]");

//Se crea el EventListener para generar la logica cuando se presiona el boton
formularioMensaje.addEventListener("submit", (event) => {
    event.preventDefault();

    //Cambia el texto del boton al presionarse
    const botonEnviar = document.querySelector("[data-mensaje-btn]");
    botonEnviar.textContent = "Mensaje Enviado!";

    //Se formatean los campos del input justo cuando se presiona el boton de enviar mensaje
    inputs.forEach(input => {
        input.value = '';
        });

    //Se crea un Intervalo para restaurar el texto inicial del boton
    const cambiarTextoBtn = setInterval(()=>{
        botonEnviar.textContent = "Enviar Mensaje";
        clearInterval(cambiarTextoBtn);
    }, 3000);
})

