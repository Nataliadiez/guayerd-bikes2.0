let nombre = localStorage.getItem("nombre")
let saludo = true

if (localStorage.getItem("saludo") === null) {
    getHour()
    localStorage.setItem("saludo", saludo)
}



function getHour() {
    const h = new Date();
    const hours = ((h.getHours() < 10) ? "0" : "") + h.getHours();
    const minutes = ((h.getMinutes() < 10) ? "0" : "") + h.getMinutes();
    const secs = ((h.getSeconds() < 10) ? "0" : "") + h.getSeconds();
    document.write("hora actual: " + hours + ":" + minutes + ":" + secs);
    console.log("estoy en horas")
    if (nombre != null) {
        saludar(hours, nombre)
    } else {
        Swal.fire("debes loguearte")
    }

};


function saludar(hours, nombre) {
    if (nombre != null) {
        if (hours < ("0" + 7)) {
            return Swal.fire("Buenas madrugadas, " + (nombre).toUpperCase());
        } else if (hours > ("0" + 6) && hours < 13) {
            return Swal.fire("Buenos dias, " + (nombre).toUpperCase());
        } else if (hours > 12 && hours < 20) {
            return Swal.fire("Buenas tardes, " + (nombre).toUpperCase());
        } else if (hours > 19 && hours < 24) {

            return Swal.fire("Buenas noches, " + (nombre).toUpperCase());
        }

    }

}