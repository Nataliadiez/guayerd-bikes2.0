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