//Haz tú validación en javascript acá

const inputNombre = document.getElementsByName('nombre')[0];
const inputEmail = document.getElementsByName('email')[0];
const inputAsunto = document.getElementsByName('asunto')[0];
const inputMensaje = document.getElementsByName('mensaje')[0];
const botonEnviar = document.getElementById('boton__enviar');

function validacionNombre() {
    const alertaNombre = document.getElementById('advertencia__nombre');
    let styleInput = inputNombre.style.cssText = 'border: 1px red solid;';
    let displayBlock = alertaNombre.style.display = 'block';

    if ((inputNombre.value).trim().length == 0) {
        // inputNombre.style.cssText = 'border: 1px red solid;';
        styleInput;
        // alertaNombre.style.display = 'block';
        displayBlock;
        alertaNombre.innerText = "El campo nombre no puede estar vacío."
        return inputNombre.value;
    } else if ((inputNombre.value).trim().length > 50) {
        styleInput;
        // alertaNombre = document.getElementById('advertencia__nombre');
        displayBlock;
        alertaNombre.innerText = "El campo nombre no puede superar los 50 caracteres.";
        return inputNombre.value;
    }
    else {
        inputNombre.style.cssText = 'border: none';
        alertaNombre.style.display = 'none';
        return inputNombre.value;
    }

}

function validacionEmail() {
    const alertaEmail = document.getElementById('advertencia__email');
    let styleInput = inputEmail.style.cssText = 'border: 1px red solid;';
    let displayBlock = alertaEmail.style.display = 'block';
    const expRegCorreo = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;

    if ((inputEmail.value).trim().length == 0) {
        styleInput;
        displayBlock;
        alertaEmail.innerText = "El campo Email no puede estar vacío."
        return inputEmail.value;
    } else if (!expRegCorreo.test(inputEmail.value.trim())) {
        displayBlock;
        styleInput;
        alertaEmail.innerText = "El correo ingresado no es valido.";
        return inputEmail.value;
    }
    else {
        inputEmail.style.cssText = 'border: red';
        alertaEmail.style.display = 'none';
        return inputEmail.value;
    }

}

function validacionAsunto() {
    const alertaAsunto = document.getElementById('advertencia__asunto');
    let styleInput = inputAsunto.style.cssText = 'border: 1px red solid;';
    let displayBlock = alertaAsunto.style.display = 'block';

    if ((inputAsunto.value).trim().length == 0) {
        // inputAsunto.nextElementSibling.classList.add('formcontato__advertencia');
        // inputAsunto.nextElementSibling.innerText = "El campo asunto no puede estar vacío.";
        styleInput;
        displayBlock;
        alertaAsunto.innerText = "El campo asunto no puede estar vacío.";
        return inputAsunto.value;
    } else if ((inputAsunto.value).trim().length > 50) {
        styleInput;
        displayBlock;
        alertaAsunto.innerText = "El campo asunto no puede superar los 50 caracteres.";
        return inputAsunto.value;
    }
    else {
        inputAsunto.style.cssText = 'border: none';
        alertaAsunto.style.display = 'none';
        return inputAsunto.value;
    }
}

function validacionMensaje() {
    const alertaMensaje = document.getElementById('advertencia__mensaje');
    let styleInput = inputMensaje.style.cssText = 'border: 1px red solid;';
    let displayBlock = alertaMensaje.style.display = 'block';

    if ((inputMensaje.value).trim().length == 0) {
        styleInput;
        displayBlock;
        alertaMensaje.innerText = "El campo mensaje no puede estar vacío."
        return inputMensaje.value;
    } else if ((inputMensaje.value).trim().length > 300) {
        styleInput;
        displayBlock;
        alertaMensaje.innerText = "El campo mensaje no puede superar los 300 caracteres.";
        return inputMensaje.value;
    }
    else {
        inputMensaje.style.cssText = 'border: none';
        alertaMensaje.style.display = 'none';
        return inputMensaje.value;
    }

}

inputNombre.addEventListener('blur', validacionNombre);
inputEmail.addEventListener('blur', validacionEmail);
inputAsunto.addEventListener('blur', validacionAsunto);
inputMensaje.addEventListener('blur', validacionMensaje);

// inputNombre.addEventListener('blur', (e) => validacionInput("nombre", e));
// document.getElementById('boton__enviar').addEventListener('click', console.log("prueba"))
botonEnviar.addEventListener('click', (e) => {
    if (validacionNombre() == "" && validacionEmail() == "" && validacionAsunto() == "" && validacionMensaje() == "") {
        e.preventDefault();
    }
    else if (validacionNombre() == "" || validacionEmail() == "" || validacionAsunto() == "" || validacionMensaje() == "") {
        e.preventDefault();
    }
})

// const expresiones = {
//     usuario: /^[a-zA-Z0-9\_\-] {0,50}$/,
//     nombre: /^[a-zA-Z0-9\_\-] {0,50}$/,
//     password: /^.{4,12}$/,
//     correo: /^[a-zA-Z0-9_.+-] + @ [a-zA-Z0-9-] + \.[a-zA-Z0-9-]+$/,
//     telefono: /^\d{7,14}$/
// }


// const validacionInput = (nombreCampo, e) => {
//     const input = e.target;
//     const alerta = document.getElementById(`advertencia__${nombreCampo}`);
//     let styleInput = input.style.cssText = 'border: 1px red solid;';
//     let displayBlock = alerta.style.display = 'block';
//     if ((input.value).trim().length == 0) {
//         styleInput;
//         displayBlock;
//         alerta.innerText = `El campo ${nombreCampo} no puede estar vacío.`;
//     } else if ((input.value).length > 50) {
//         styleInput;
//         displayBlock;
//         alerta.innerText = `El campo  ${nombreCampo} no puede superar los 50 caracteres.`;
//     }
//     else {
//         input.style.cssText = 'border: none';
//         alerta.style.display = 'none';
//     }

// };