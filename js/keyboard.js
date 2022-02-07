let contadorFallos = 0;

String.prototype.replaceAt=function(i, caracter){
    return this.substr(0, i) + caracter + this.substr(i + caracter.length);
};

//---------------- Creación del teclado virtual ----------------//
const letras = "QWERTYUIOPASDFGHJKLÑZXCVBNM",
      botonLetra = document.getElementsByName("tecla");
let teclas = letras.split("");
for (i = 0; i <= teclas.length - 1; i++) {
    document.write("<li id="+teclas[i]+" name='tecla'>" + teclas[i] + "</li>")
};

//---------------- Imprimir tecla seleccionada ----------------//
botonLetra.forEach(function(boton){
    boton.addEventListener("click", function(){
        if(categoriaSeleccionada ==""){
            alert("Debe seleccionar una categoria")
        } else{
            let haFallado = true;
            let letraVirtual = boton.innerText;
            document.getElementById(boton.innerText).style.backgroundColor = "#e639476c";
            for (i in palabraSecreta) {
                if (letraVirtual == palabraSecreta[i]) {
                    palabraConGuiones = palabraConGuiones.replaceAt(i*2, letraVirtual);
                    borrarPartida()
                    ctx.fillText(palabraConGuiones, 400, 450);
                    haFallado = false;
                };
            };
            if (haFallado) {
                contadorFallos++;
            };
            fallos();
            if (contadorFallos == 7) {
                finJuegoPerdido();
                setTimeout(() => {
                    borrarPartida();
                }, 3000);
                document.getElementById("perdedor").innerHTML = "<p>¡PERDISTE!<br><br>La palabra correcta era: " + palabraSecreta + "</p>";
            };
            if (palabraSecreta == palabraConGuiones.replace(/ /g, "")){
                finJuegoGanado();
                borrarPartida();
                setTimeout(() => {
                    borrarPartida();
                }, 3000);
                document.getElementById("ganador").innerHTML = "<p>¡GANASTE!<br><br>La palabra correcta es: " + palabraSecreta + "</p>";
                setTimeout(() => {
                    ganador();
                }, 50);
            };
        };
    });
});

//---------------- Captura del evento del teclado ----------------// 
window.onload = function(){
    document.onkeypress = tecladoFisico;
};

function tecladoFisico(evento){
    if(categoriaSeleccionada ==""){
        alert("Debe seleccionar una categoria")
    } else{
        let haFallado = true;
        let letraFisica = String.fromCharCode(evento.keyCode).toUpperCase();
        document.getElementById(String.fromCharCode(evento.charCode).toUpperCase()).style.backgroundColor = "#e639476c";
        for (i in palabraSecreta) {
            if (letraFisica == palabraSecreta[i]) {
                palabraConGuiones = palabraConGuiones.replaceAt(i*2, letraFisica);
                borrarPartida()
                ctx.fillText(palabraConGuiones, 400, 450);
                haFallado = false;
            };
        };
        if (haFallado){
            contadorFallos++;
        };
        fallos();
        if (contadorFallos == 7) {
            finJuegoPerdido();
            setTimeout(() => {
                borrarPartida();
            }, 3000);
            document.getElementById("perdedor").innerHTML = "<p>¡PERDISTE!<br><br>La palabra correcta era: " + palabraSecreta + "</p>";
        };
        if (palabraSecreta == palabraConGuiones.replace(/ /g, "")){
            finJuegoGanado();
            borrarPartida();
            setTimeout(() => {
                borrarPartida();
            }, 3000);
            document.getElementById("ganador").innerHTML = "<p>¡GANASTE!<br><br>La palabra correcta es: " + palabraSecreta + "</p>";
            setTimeout(() => {
                ganador();
            }, 50);
        };
    };
};