//---------- Manipulación del canvas ----------//
let lienzo = document.querySelector("#lienzo");
let ctx = lienzo.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(50, 380, 200, 10);
ctx.fillRect(140, 380, 10, -350);
ctx.fillRect(150, 30, 260, 10);

ctx.lineWidth = 5;
ctx.moveTo(250, 35)
ctx.lineTo(145, 130);
ctx.stroke();

function borrarPartida(){
    ctx.clearRect(50, 400, 500, 800);
    ctx.clearRect(250, 40, 500, 800);
};

function campos(){
    ctx.fillStyle = "black";
    ctx.font = "40px Arial";
    ctx.textAlign = "center";
    ctx.fillText(palabraConGuiones, 400, 450);
};

function fallos() {
    switch (contadorFallos) {
        case 1: //----------- Cabeza -----------//
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.arc(460, 120, 35, 0, 2 * 3.14);
            ctx.stroke();
        break;
        case 2: //------------ Torso ------------//
            ctx.moveTo(460, 155)
            ctx.lineTo(460, 290);
            ctx.stroke();
        break;
        case 3: //------- brazo derecho -------//
            ctx.moveTo(460, 175)
            ctx.lineTo(410, 220);
            ctx.stroke();
        break;
        case 4: //------- brazo izquierdo -------//
            ctx.moveTo(460, 175)
            ctx.lineTo(510, 220);
            ctx.stroke();
        break;
        case 5: //------- pierna izquierda -------//
            ctx.moveTo(410, 340)
            ctx.lineTo(460, 290);
            ctx.stroke();
        break;
        case 6: //------- pierna derecha -------//
            ctx.moveTo(510, 340)
            ctx.lineTo(460, 290);
            ctx.stroke();
        break;
        case 7: //----------- Soga -----------//
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.moveTo(460, 165);
            ctx.quadraticCurveTo(360, 150, 380, 35);
            ctx.stroke();
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.arc(460, 120, 35, 0, 2 * 3.14);
            ctx.stroke();
            ctx.font = "20px Arial";
            ctx.textAlign = "center";
            ctx.fillText("x   x", 460, 120);
            ctx.fillText("  o  ", 460, 140);
        break;
    };
};

function ganador(){
    //----------- Cabeza Vivo -----------//
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.arc(460, 170, 35, 0, 2 * 3.14);
    ctx.stroke();
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillText("^   ^", 460, 170);
    ctx.fillText("  v  ", 460, 190);
    
    //------------ Torso ------------//
    ctx.moveTo(460, 205)
    ctx.lineTo(460, 340);
    ctx.stroke();
    
    //------- brazo derecho -------//
    ctx.moveTo(460, 235)
    ctx.lineTo(410, 190);
    ctx.stroke();
    
    //------- brazo izquierdo -------//
    ctx.moveTo(460, 235)
    ctx.lineTo(510, 190);
    ctx.stroke();
    
    //------- pierna izquierda -------//
    ctx.moveTo(410, 390)
    ctx.lineTo(460, 340);
    ctx.stroke();
    
    //------- pierna derecha -------//
    ctx.moveTo(510, 390)
    ctx.lineTo(460, 340);
    ctx.stroke();
};