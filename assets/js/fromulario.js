// Variables
const btnEnviar = document.querySelector('#enviar');


// Variables para campos
const nombre = document.querySelector('#nombre');
const numCelular = document.querySelector('#telefono');
const fecha = document.querySelector('#date');
const mensaje = document.querySelector('#mensaje');




eventListeners();

function eventListeners() {
    // Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);


    //Campos de formulario
    nombre.addEventListener('blur', validarFormulario )
    numCelular.addEventListener('blur', validarFormulario )
    fecha.addEventListener('blur', validarFormulario )
    mensaje.addEventListener('blur', validarFormulario )
}



//Funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('active');
}


// Valida formulario
function validarFormulario(e) {
    if(e.target.value.length > 0) {
        console.log('hay algo')
    } else {
       e.target.classList.add('active')
    }
}