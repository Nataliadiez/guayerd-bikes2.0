let max = 5
let min = 1
let regalo = Math.floor(Math.random() * max) + min;
let nombreLocalStorage = localStorage.getItem("nombre")
let codigofinal;

switch (regalo) {
    case 1:
        codigofinal = "5HOTSALE para obtener un 5% de descuento"
        break;
    case 2:
        codigofinal = "10HOTSALE para obtener un 10% de descuento"
        break;
    case 3:
        codigofinal = "15HOTSALE para obtener un 15% de descuento"
        break;
    case 4:
        codigofinal ="20HOTSALE para obtener un 20% de descuento"
        break;
    case 5:
        codigofinal = "25HOTSALE para obtener un 25% de descuento"
        break;
}

if (nombreLocalStorage != null) {
    alert("Estimado/a " + localStorage.getItem("nombre") + " Gracias por elegirnos! Le obsequiamos el código " + codigofinal + " con su compra");
}