let nombreLocalStorage = localStorage.getItem("nombre")
let descuentoApi = new XMLHttpRequest();
const url = "https://demo2420474.mockable.io/getCoupon"
descuentoApi.open("GET",url);
descuentoApi.send();


descuentoApi.onreadystatechange = (e) => {
    if(descuentoApi.readyState === 4){
        descuentoApi = JSON.parse(descuentoApi.responseText)
        let codigo_descuento = descuentoApi.text
         let porcentaje_descuento = descuentoApi.discountPercentage
        console.log(codigo_descuento)
        console.log(porcentaje_descuento)
        
        if (nombreLocalStorage != null) {
            Swal.fire({
            title: `Estimado/a ${localStorage.getItem("nombre")}`, // título de la alerta
            text: `¡Gracias por elegirnos! Le obsequiamos un descuento del ${porcentaje_descuento}% con el código ${codigo_descuento} en su compra.`, // texto de la alerta
            popup: 'swal2-show', //esta seria la animación del popup
            backdrop: 'swal2-backdrop-show', //coloca el background detras de la alerta en tono más oscuro
            icon: 'swal2-icon-show', //muestra el icono, info, error o warning
            confirmButtonText: '¡Gracias!', // texto del bottón
            confirmButtonColor: 'darkblue', // color del botón
            footer: 'Recuerde utilizar el código antes de finalizar la compra.', // footer de la alerta
            stopKeydownPropagation: false,

            })
    //Swal.fire(`Estimado/a ${localStorage.getItem("nombre")} Gracias por elegirnos! Le obsequiamos el código ${codigofinal} con su compra`);
}
    }
}

/* JS PARA GUARDAR INFO DEL NOMBRE Y DEL EMAIL */

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

/* JS PARA RECIBIR NOVEDADES */

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

}

/* Swal.fire({
    title: "Bienvenido", // título de la alerta
    text: 'Usted ha recibido un descuento del %10 con el código "conchita"', // texto de la alerta
    popup: 'swal2-show', //esta seria la animación del popup
    backdrop: 'swal2-backdrop-show', //coloca el background detras de la alerta en tono más oscuro
    icon: 'swal2-icon-show', //muestra el icono, info, error o warning
    confirmButtonText: '¡Gracias!', // texto del bottón
    confirmButtonColor: 'darkblue', // color del botón
    footer: 'Recuerde utilizar el código antes de finalizar la compra.', // footer de la alerta
    stopKeydownPropagation: false,

}) */

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

    