let nombreLocalStorage = localStorage.getItem("nombre")
let descuentoApi = new XMLHttpRequest();
const urlDes = "https://demo2420474.mockable.io/getCoupon"
descuentoApi.open("GET", urlDes);
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


    