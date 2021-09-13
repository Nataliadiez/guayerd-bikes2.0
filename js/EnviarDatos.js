/* Cuando el visitante llena el formulario, enviar los datos al servidor.

https://desarrolloweb.com/articulos/fetch-post-ajax-javascript.html

 datos.setRequestHeader("content-type","application/x-www-form-urlencoded")

URL: https://demo2420474.mockable.io/submitForm (POST)

Formato:
`{name:"", email:"", phone:"",subject:"", message:""}` */


const formulario = document.querySelector("#formulario")
const msj_form_vacio = document.querySelector("#error-formulario-vacio")


const envio = ()=>{
    
    nombre=document.querySelector("#nombre").value
    email=document.querySelector("#email").value
    telefono=document.querySelector("#telefono").value
    mensaje=document.querySelector("#mensaje").value
    
    if(nombre.length === 0 || email.length === 0 || telefono.length === 0 || mensaje.length === 0){
        console.log("error, campo vacio")
        msj_form_vacio.classList.add("errorFormularioVacio")
        msj_form_vacio.innerHTML = "No puede haber campos vacíos al enviar el formulario."
    } else{
        msj_form_vacio.remove("errorFormularioVacio")
        usuario={
            "name":nombre,
            "email":email,
            "phone":telefono,
            "subject":"esto no se que es",
            "message":mensaje,  
    }
    
    usuario=JSON.stringify(usuario)
    
    setTimeout(()=>{
       
       document.querySelector("#nombre").value=""
       document.querySelector("#email").value=""
       document.querySelector("#telefono").value=""
       document.querySelector("#mensaje").value=""
       setTimeout(() => {
        Swal.fire({
            title: "Gracias por enviar tu mensaje",
            timer: 2000,
            confirmButtonColor: 'darkblue', // color del botón
            icon: "success"
       })},1000)
   } 
   ,3000)  

   const datos =new XMLHttpRequest()
   const url =`https://demo2420474.mockable.io/submitForm`
   const metodo="POST";
   datos.open(metodo,url)
  
   datos.send(usuario)

    }

      
      
    
  
}


//formulario.addEventListener("submit",envio)

