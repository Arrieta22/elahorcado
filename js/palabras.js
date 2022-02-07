const botonCategoria = document.getElementsByName("categoria");
let animales = ["Perro", "Gato", "Elefante", "Tigre", "Gallina", "Cerdo", "Cebra", "Gorila", "Rinoceronte", "Jirafa"],
    automoviles = ["Chevrolet", "Ford", "Mazda", "Renault", "Volkswagen", "Nissan", "Audi", "Seat", "Honda", "Hyundai"],
    frutas = ["Limon", "Mango", "Mandarina", "Tomate", "Aguacate", "Fresa", "Kiwi", "Naranja", "Mora", "Frambuesa"],
    programacion = ["PHP", "Ruby", "Python", "Java", "JavaScript", "CSS", "HTML", "Angular", "React", "Node"],
    redesSociales = ["Facebook", "Twitter", "Instagram", "LinkedIn", "WhatsApp", "YouTube", "Snapchat", "Pinterest", "TikTok", "Messenger"],
    agregadas = ["Alura"];

let categoriaSeleccionada ="";
let palabraSecreta ="";
let palabraConGuiones ="";

botonCategoria.forEach(function(categoria){
    categoria.addEventListener("click", function(){
        reinicarJuego(); //--- Reinicia los botones y la variables ---//
        borrarPartida(); //--- Borra el dibujo previo del lienzo ---//
        switch (categoria.id) { //--- Toma la categoria seleccionada ---//
            case "animales": categoriaSeleccionada = animales;
                break;
            case "automoviles": categoriaSeleccionada = automoviles;
                break;
            case "frutas": categoriaSeleccionada = frutas;
                break;
            case "programacion": categoriaSeleccionada = programacion;
                break;
            case "redesSociales": categoriaSeleccionada = redesSociales;
                break;
            case "agregadas": categoriaSeleccionada = agregadas;
                break;
            }
        let boton = document.getElementsByTagName("li");
        for (i = 0; i < boton.length; i++) {
            boton[i].style.backgroundColor = "#e63946";
        }

        document.getElementById(categoria.id).style.backgroundColor = "#e639476c";

        palabraSecreta = categoriaSeleccionada[Math.floor(Math.random() * categoriaSeleccionada.length)];
        palabraSecreta = palabraSecreta.toUpperCase();
        palabraConGuiones = palabraSecreta.replace(/./g, "_ ");

        campos(); //--- Crea los espacios de las letras en el lienzo ---//
    });
});


