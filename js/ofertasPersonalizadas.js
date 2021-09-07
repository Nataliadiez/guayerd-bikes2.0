if (localStorage.getItem("ingresarNovedades") === "si") {

    var resultado = window.confirm('¿Desea ver mas ofertas?');
    if (resultado === true) {
        window.location.replace("ofertasPersonalizadas.html");
    } else {
        window.alert('No recibirá ofertas.');
    }

}