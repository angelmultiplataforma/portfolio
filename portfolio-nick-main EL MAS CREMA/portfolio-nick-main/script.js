

//MENU HAMBURGUESA

let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
  
    document.getElementById("nav").classList = "";
    menuVisible = false;
}






// VALIDACION DE FORMULARIO


const datos= {
    nombre: '',
    email: '',
    mensaje: '',
    telefono:'',
}


const email= document.querySelector('#email') 
const mensaje= document.querySelector('#mensaje')
const nombre= document.querySelector('#nombre')
const telefono= document.querySelector('#telefono')
const formulario=document.querySelector(".formulario")

nombre.addEventListener('input',leerTexto)
email.addEventListener('input',leerTexto)
mensaje.addEventListener('input',leerTexto)



formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //Comprobar que no haya campos en datos vacíos
    const{nombre,email,mensaje}=datos;

    if(nombre===""||email===""||mensaje===""){
        //Si está vacío algún campo mostrar error
        mostrarMensaje("error", "Todos los campos son obligatorios")
        return;
    }
  

     //Si todo está correcto enviar y mostrar mensaje de enviado
    console.log("Todo bien")
    mostrarMensaje("correct","Mensaje enviado correctamente")
   
})

function leerTexto(e){
    
    datos[e.target.id]=e.target.value;
    console.log(datos)
    
}



function mostrarMensaje(tipo, mensaje){
    const alerta=document.createElement('p')
    alerta.textContent= mensaje
    alerta.classList.add(tipo);
    formulario.appendChild(alerta)

    setTimeout(()=>{
        alerta.remove();
    },2000)

    

}


















//Funcion que aplica las animaciones de las habilidades
// function efectoHabilidades(){
//     var skills = document.getElementById("skills");
//     var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
//     if(distancia_skills >= 300){
//         let habilidades = document.getElementsByClassName("progreso");
//         habilidades[0].classList.add("javascript");
//         habilidades[1].classList.add("htmlcss");
//         habilidades[2].classList.add("photoshop");
//         habilidades[3].classList.add("wordpress");
//         habilidades[4].classList.add("drupal");
//         habilidades[5].classList.add("comunicacion");
//         habilidades[6].classList.add("trabajo");
//         habilidades[7].classList.add("creatividad");
//         habilidades[8].classList.add("dedicacion");
//         habilidades[9].classList.add("proyect");
//     }
// }


// //detecto el scrolling para aplicar la animacion de la barra de habilidades
// window.onscroll = function(){
//     efectoHabilidades();
// } 