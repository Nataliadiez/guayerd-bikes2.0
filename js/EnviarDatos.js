/* Cuando el visitante llena el formulario, enviar los datos al servidor.

https://desarrolloweb.com/articulos/fetch-post-ajax-javascript.html

 datos.setRequestHeader("content-type","application/x-www-form-urlencoded")

URL: https://demo2420474.mockable.io/submitForm (POST)

Formato:
`{name:"", email:"", phone:"",subject:"", message:""}` */


const formulario =document.querySelector("#formulario")


const envio=()=>{

    nombre=document.querySelector("#nombre").value
    email=document.querySelector("#email").value
    telefono=document.querySelector("#telefono").value
    mensaje=document.querySelector("#mensaje").value
    alert(nombre+" "+email+" \n"+mensaje+telefono)
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
         
   
    },3000)  

    const datos =new XMLHttpRequest()
    const url =`https://demo2420474.mockable.io/submitForm`
    const metodo="POST";
    datos.open(metodo,url)
   
    datos.send(usuario)
      
    
  
}


formulario.addEventListener("submit",envio)

