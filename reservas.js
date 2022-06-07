let contenedor=document.getElementById("contenedor")

let bandera=true

contenedor.addEventListener("click",function(evento){

    console.log(evento.target)

    if(bandera==true){

        if(evento.target.classList.contains("img-fluid")){
            console.log("presionaste silla")
            evento.target.src="img/cinema2.png"
            bandera=false
        
        }

    }else{

        if(evento.target.classList.contains("img-fluid")){
            console.log("presionaste silla")
            evento.target.src="img/cinema-chair.png"
            bandera=true
        
        }

    }

})



let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
   

    evento.preventDefault()


    let correo=document.getElementById("correo").value 
    let pelicula=document.getElementById("pelicula").value 
    let numeroboletas=document.getElementById("numeroboletas").value 
    let tipoasiento=document.getElementById("tipoasiento").value 



    if(tipoasiento=="1"){

        let valor=numeroboletas*15000
        alert("Su total a pagar es : $"+valor)

    }else{

        let valor=numeroboletas*12000
        alert("Su total a pagar es: $"+valor)

    }



})