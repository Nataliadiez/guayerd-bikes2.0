const img_banner = document.querySelector("#img_banner")
const link_banner = document.querySelector("#link-banner")

let datos_banner = new XMLHttpRequest;
const url = "http://demo2420474.mockable.io/getHomeBanner"
datos_banner.open("GET",url);
datos_banner.send();

datos_banner.onreadystatechange = (e) => {
    if(datos_banner.readyState === 4) {
        datos_banner = JSON.parse(datos_banner.responseText)
        img_banner.src = datos_banner.imgUrl
        img_banner.alt = datos_banner.title
        link_banner.href = datos_banner.link
        
    }
}


