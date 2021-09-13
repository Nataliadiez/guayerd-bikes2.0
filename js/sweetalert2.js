// JS PARA GUARDAR INFO DEL NOMBRE Y DEL EMAIL

let nombreform;
let emailform;
let localnombre = localStorage.getItem("nombre")
let localmail = localStorage.getItem("email")
let localnovedades = localStorage.getItem("novedades")
let checkboxForm;

if (localnombre === null || localmail === null) {
    const { value: formValues } = setTimeout(() => {
        Swal.fire({
            title: '¡Bienvenido!',
            html:

                '<div class="container">' +
                '<label id="nombre-ingresado"> Ingrese su nombre </label>' +
                '<input type="text" id="swal-input1" class="swal2-input">' +
                '<label> Ingrese su email </label>' +
                '<input type="text" id="swal-input2" class="swal2-input">' +
                '<div><br></div>' +
                '<span><label> Deseo recibir novedades</label> <input type="checkbox" id="checkForm"></span> </div>',

            confirmButtonText: 'Enviar',
            width: "51%",

            backdrop: true,
            allowOutsideClick: true,
            allowEscapeKey: true,
            allowEnterKey: true,

            preConfirm: () => {
                return [
                    checkboxForm = document.querySelector("#checkForm").checked,
                    nombreform = document.getElementById('swal-input1').value,
                    emailform = document.getElementById('swal-input2').value,
                    localStorage.setItem("nombre", nombreform),
                    localStorage.setItem("email", emailform),
                    localStorage.setItem("novedades", checkboxForm)

                ]

            }

        })

    }, 2000)
}



function random() {
    return Math.random().toString(36).substr(2); // Eliminar `0.`
};

function token() {
    return random(); // Para hacer el token más largo
};

let codToken = token()

console.log(localStorage.getItem("nombre"))


var URL_1 = "https://demo2420474.mockable.io/userData";
var perfil = {
    token: codToken,
    name: localStorage.getItem("nombre").toString(),
    email: localStorage.getItem("email").toString(),
    sendEmail: localStorage.getItem("novedades")
}
console.log(perfil)
fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(perfil) // data can be `string` or {object}!

    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));



/* const caraCruz = new Promise ((resolve,reject) => {
  moneda = Math.floor(Math.random()*2);
  console.log(moneda)
  moneda==0?resolve("cara"):reject("cruz")
})
.then( (msg)=> console.log(msg))
.then( ()=> console.log("Gracias por jugar!"))
.then( ()=> console.log("Que tenga buen día!")) 
.catch( (msg)=> console.log(msg))
.finally(()=>console.log("Gracias por jugar!"))

/* let localnombre = localStorage.getItem("nombre")
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

// JS PARA RECIBIR NOVEDADES

let revisar = localStorage.getItem("ingresarNovedades")
let seguir
if (revisar === "si" || revisar === "no") {
    seguir = false;

} else {
    seguir = true
}
while (seguir) {

    let novedades = prompt("¿Desea que le enviemos novedades? \nIngrese su decision: Si/No ").toLowerCase();
    if (novedades === "si".toLowerCase()) {
        localStorage.setItem("ingresarNovedades", novedades);
    }
    if (novedades === "no".toLowerCase()) {
        localStorage.setItem("ingresarNovedades", novedades);
    }



    let informacionlocal = localStorage.getItem("ingresarNovedades")

    if (informacionlocal === "si" || informacionlocal === "no") {
        seguir = false;
    }

} */



//opciones
// title:
// text:
// html:
// icon:
// confirmButtonText:
// footer:
// width:
// padding:
// background:
// grow:
// backdrop:
// timer:
// timerProgressBar:
// toast:
// position:
// allowOutsideClick:
// allowEscapeKey:
// allowEnterKey:
// stopKeydownPropagation:

// input:
// inputPlaceholder:
// inputValue:
// inputOptions:

//  customClass:
// 	container:
// 	popup:
// 	header:
// 	title:
// 	closeButton:
// 	icon:
// 	image:
// 	content:
// 	input:
// 	actions:
// 	confirmButton:
// 	cancelButton:
// 	footer:	

// showConfirmButton:
// confirmButtonColor:
// confirmButtonAriaLabel:

// showCancelButton:
// cancelButtonText:
// cancelButtonColor:
// cancelButtonAriaLabel:

// buttonsStyling:
// showCloseButton:
// closeButtonAriaLabel:


// imageUrl:
// imageWidth:
// imageHeight:
// imageAlt: