let localnombre = localStorage.getItem("nombre")
let localemail = localStorage.getItem("email")
let seguir1 = true

if ((localStorage.getItem("nombre") != null)) {
    seguir1 = false
    
}


while (seguir1) {

    let nombre = prompt("¿Desea ingresar su Nombre?")
    let mail = prompt("¿Desea ingresar su Mail?")
    localStorage.setItem("nombre", nombre)
    localStorage.setItem("email", mail)

    validarCorreo(mail)
    seguir1 = false
    

}









function validarCorreo(mail) {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(mail);
    if (esValido == true) {
        alert("¡Gracias por sus datos!")


    }
}