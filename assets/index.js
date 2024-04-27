let boton = document.getElementById("boton")
let mujer = document.getElementById("mujer");
let hombre = document.getElementById("hombre")

boton.addEventListener("click",async() =>{
    let response = await fetch("/crearUsuarios")
    let data = await response.json()
    let males = data.hasOwnProperty("male") ? [...data.male] : [];
    let females = data.hasOwnProperty("female") ? [...data.female] : [];
    
    mujer.innerHTML = ""
    hombre.innerHTML = ""

    males.forEach((male) =>{
        hombre.innerHTML += `
         <p class= "tarjeta">
             Nombre: ${male.nombre}<br>
             Apellido: ${male.apellido}<br>
             ID: ${male.id}<br>
             Timestamp: ${male.timestamp}
         </p>
     `;
    })

    females.forEach((female) =>{
        mujer.innerHTML += `
         <p class= "tarjeta">
             Nombre: ${female.nombre}<br>
             Apellido: ${female.apellido}<br>
             ID: ${female.id}<br>
             Timestamp: ${female.timestamp}
         </p>
     `;
    })
}) 



