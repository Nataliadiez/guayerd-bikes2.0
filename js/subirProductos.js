
const url="https://demo2420474.mockable.io/productList"
fetch(url)
.then(response=>response.json())
.then(data=>{
       console.log(data)
       
       data.forEach(dato => {
        let divGeneral = document.querySelector("#mostrar")
        if(dato.discountPrice!==undefined){
            divGeneral.innerHTML+=`<div class="card col-8" style="width: 35rem;"><h5 class="card-title">${dato.title}</h5>
            <img class="card-img-top" src="${dato.imgUrl}" alt=""></img>
            <div class="card-body"><p class="card-text">${dato.description}</p>
            <p>${dato.inStock}u. disponibles</p>
            <p id="valores"><span>Antes: <del>$${dato.price} ${dato.currency}</del></span> Ahora: $${dato.discountPrice} ${dato.currency}</p>
            
            <a href="#" class="btn btn-primary" id="boton-comprar">Comprar</a></div></div>` 
            
         }else{
           divGeneral.innerHTML+=`<div class="card col-8" style="width: 35rem;"><h5 class="card-title">${dato.title}</h5>
           <img class="card-img-top" src="${dato.imgUrl}" alt=""></img>
           <div class="card-body"><p class="card-text">${dato.description}</p>
           <p>${dato.inStock}u. disponibles</p>
           <p>$${dato.price} ${dato.currency}</p><a href="#" class="btn btn-primary" id="boton-comprar">Comprar</a></div></div>`
            
          
         } 
});
});