// Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail')

// Variables para campos
const nombre = document.querySelector('#nombre');
const numCelular = document.querySelector('#telefono');
const fecha = document.querySelector('#date');
const mensaje = document.querySelector('#mensaje');
const suscribete = document.querySelector('#suscribete');




eventListeners();

function eventListeners() {
    // Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);


    //Campos de formulario
    nombre.addEventListener('blur', validarFormulario )
    numCelular.addEventListener('blur', validarFormulario )
    fecha.addEventListener('blur', validarFormulario )
    mensaje.addEventListener('blur', validarFormulario )
    suscribete.addEventListener('blur', validarFormulario )
    
}



//Funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('active');  //para cuando arranqque la web
                                        //aparezca oscuro el boton y no poder presionarlo
}


// Valida formulario             marca los bordes de rojo cuan
function validarFormulario(e) {
    if(e.target.value.length > 0) {
        console.log('hay algo')
    } else {
       e.target.classList.add('active')

       mostrarError();
    }


}

//Error de formulario
function mostrarError() {
    const mensajeError = document.querySelector('#enviar-mail')
    mensajeError.classList.add('active');

    //para que no se repita cada vez q no llenemos nd
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
   
}