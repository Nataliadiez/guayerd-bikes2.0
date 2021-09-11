const formulario = document.querySelector("#formulario-completo")
const inputs = document.querySelectorAll("#formulario-completo input");
const error_name = document.querySelector("#error_name")
const error_email = document.querySelector("#error_email")
const error_tel = document.querySelector("#error_tel")
const mensaje = document.querySelector("#mensaje")
const error_mensaje = document.querySelector("#error_mensaje")
const inputNombre = document.querySelector("#nombre")
const inpuEmail = document.querySelector("#email")
const inputTel = document.querySelector("#telefono")
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8,15}$/ // 8 a 15 numeros.
}


const validarFormulario = (e) => {
    
    switch(e.target.name) {
        case "nombre": 
            if(expresiones.nombre.test(e.target.value) === false){
                error_name.innerHTML = "No se permite ingresar números en este campo."
                error_name.classList.add("error")
                inputNombre.classList.add("error-borde")
                
            } else{
                error_name.innerHTML = ""
                error_name.classList.remove("error")
                inputNombre.classList.remove("error-borde")
            }
        break;
        case "email":
            if(expresiones.email.test(e.target.value) === false){
                error_email.innerHTML = "Ingrese un email válido."
                error_email.classList.add("error")
                inpuEmail.classList.add("error-borde")
                
            } else{
                error_email.innerHTML = ""
                error_email.classList.remove("error")
                inpuEmail.classList.remove("error-borde")

            }

        break;  
        case "telefono": 
            if(expresiones.telefono.test(e.target.value) === false){
                error_tel.innerHTML = "Ingrese su número de teléfono sin el + y sin el 0, de 8 a 15 dígitos."
                error_tel.classList.add("error")
                inputTel.classList.add("error-borde")
            } else{
                error_tel.innerHTML = ""
                error_tel.classList.remove("error")
                inputTel.classList.remove("error-borde")

            }
        break;
        
    } 
}

inputs.forEach((input)=> {
    input.addEventListener("blur", validarFormulario)
    })

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
})

const validarMensaje = () => {
    if(mensaje.value === ""){
        error_mensaje.innerHTML = "Este campo no puede estar vacío o tener menos de tres caracteres."
        error_mensaje.classList.add("error")
        mensaje.classList.add("error-borde")
    } else if(mensaje.value.length <=3) {
        error_mensaje.innerHTML = "Este campo no puede estar vacío o tener menos de tres caracteres."
        error_mensaje.classList.add("error")
        mensaje.classList.add("error-borde")
    }
    
    else {
        error_mensaje.innerHTML = ""
        error_mensaje.classList.remove("error")
        mensaje.classList.remove("error-borde")
    }
}
