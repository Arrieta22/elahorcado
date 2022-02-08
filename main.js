const botonReiniciarJuego = document.getElementById("reiniciarJuego"),
      botonAgregarPalabra = document.getElementById("agregarPalabra");

//---------------- Botón para reiniciar el juego -----------------------//
botonReiniciarJuego.addEventListener("click", reinicarJuego);

function reinicarJuego(){
    borrarPartida()
    let boton = document.getElementsByTagName("li");
    for(i = 0; i < boton.length; i++){
        boton[i].style.backgroundColor = "#e63946";
    }
    contadorFallos = 0;
    palabraSecreta ="";
    palabraConGuiones ="";
    categoriaSeleccionada ="";
};

//---------------- Botón para agregar una palabra nueva -----------------------//
botonAgregarPalabra.addEventListener("click", function agregarPalabra(){
    let preguntaAgregar = prompt("La palabra se agregará en la categoria \"Agregadas\"","");
    if (preguntaAgregar == null || preguntaAgregar == "" || preguntaAgregar == " " || Number(preguntaAgregar)){
        alert("No se pudo agregar la palabra")
    }else{
        agregadas.push(preguntaAgregar);
    };
});

//---------------- Genera un PopUp de Ganador -----------------------//
function ganaste(){
    document.querySelector(".ganador").classList.add("show");
    setTimeout(() => {
        document.querySelector(".ganador").classList.remove("show");
    }, 3000);
};

//---------------- Genera un PopUp de Perdedor -----------------------//
function perdiste(){
    document.querySelector(".perdedor").classList.add("show");
    setTimeout(() => {
        document.querySelector(".perdedor").classList.remove("show");
    }, 3000);
};

function finJuegoPerdido(){
    perdiste();
    let boton = document.getElementsByTagName("li");
    for (i = 0; i < boton.length; i++) {
        boton[i].style.backgroundColor = "#e63946";
    };
    contadorFallos = 0;
    palabraConGuiones ="";
    categoriaSeleccionada ="";
};

function finJuegoGanado() {
    ganaste();
    let boton = document.getElementsByTagName("li");
    for (i = 0; i < boton.length; i++) {
        boton[i].style.backgroundColor = "#e63946";
    };
    contadorFallos = 0;
    palabraConGuiones ="";
    categoriaSeleccionada ="";
};