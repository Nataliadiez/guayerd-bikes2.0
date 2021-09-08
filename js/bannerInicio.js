const img_banner = document.querySelector("#img_banner")
const title_api = document.querySelector("#title_api")
const link_api = document.querySelector("#link_api")

let datos_banner = new XMLHttpRequest;
const url = "http://demo2420474.mockable.io/getHomeBanner"
datos_banner.open("GET",url);
datos_banner.send();

datos_banner.onreadystatechange = (e) => {
    if(datos_banner.readyState === 4) {
        datos_banner = JSON.parse(datos_banner.responseText)
        console.log(datos_banner)
        img_banner.src = datos_banner.imgUrl
        title_api.innerHTML = datos_banner.title
        link_api.innerHTML = datos_banner.link
        link_api.href = datos_banner.link
        
    }
}


