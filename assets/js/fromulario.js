// Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail')






// Variables para campos
const nombre = document.querySelector('#nombre');
const numCelular = document.querySelector('#telefono');
const fecha = document.querySelector('#date');
const mensaje = document.querySelector('#mensaje');
const suscribete = document.querySelector('#suscribete');


const er =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
 
    // Enviar email
    formulario.addEventListener('submit', enviarEmail);
}



//Funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('active');  //para cuando arranqque la web
                                        //aparezca oscuro el boton y no poder presionarlo
}


// Valida formulario             
function validarFormulario(e) {

    //marca los bordes de rojo cuando el formulario esta vacio
    if(e.target.value.length > 0) {

        //eliminar errores
        const error = document.querySelector('.error');
        if(error) {
            error.remove();
        };

        e.target.classList.remove('active')
        e.target.classList.add('correct')
       
    } else {
        e.target.classList.remove('correct')
       e.target.classList.add('active')
      
       mostrarError('Todos los campos son obligatorios');
    }


    //validando el email
    if(e.target.type === 'email') {
       
       
        if(er.test( e.target.value)) {
            const error = document.querySelector('.error');
             if(error) {
            error.remove();
        };
            
            e.target.classList.remove('active')
            e.target.classList.add('correct')
        } else {
            e.target.classList.remove('correct')
            e.target.classList.add('active')     
            mostrarError('El email no es valido');
        }
    }

    if(er.test(nombre.value) && telefono.value !== '' && Date.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('active');
    }

}


//Error de formulario
function mostrarError(mensaje) {
    const mensajeError = document.querySelector('#enviar-mail')
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('active');

    //para que no se repita cada vez q no llenemos nd
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
   
}


