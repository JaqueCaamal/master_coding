//Ejecutar un mensaje Dale click para iniciar...🔥 cuando el html esté cargado
alert("Dale click para iniciar...🔥");

document.getElementById("player").addEventListener("mouseover", sumarPuntos);

let puntos = 0;
let tiempo = 8;
let puntosNecesariosParaGanar = 10;

function tablero(){
    document.getElementById("puntos").innerHTML = "Puntos: " + (puntos) + "/" + puntosNecesariosParaGanar;
}

function sumarPuntos() {
    // document.getElementById('score').innerHTML = "<h1></h1>"
    puntos++;
    //Movimiento círculo random por todo el browser
    // NUESTRO TABLERO
    let numeroRandom = Math.round(Math.random() * 500);
    document.getElementById("player").style.marginTop = numeroRandom + "px";
    document.getElementById("player").style.marginLeft = numeroRandom + "px";
    if (puntos === puntosNecesariosParaGanar) {
        document.getElementById("ganaste").innerHTML = " <h1> ¡Ganaste! </h1>";
        //alert("¡Ganaste!");
        reiniciarJuego();
    } else {
        document.getElementById("ganaste").innerHTML = "<h1></h1>";
    }
}

function reiniciarJuego() {
    tiempo = 8;
    puntos = 0;
    console.log('reiniciar',puntos);
}

function restarTiempo() {
    tiempo--;
    document.getElementById("tiempo").innerHTML = "&nbsp; &nbsp; Tiempo: " + tiempo;
    
    if (tiempo === 0) {
        document.getElementById("perdiste").innerHTML = "<h1> ¡Perdiste! </h1> ";
        // alert("¡Perdiste!");
        reiniciarJuego();
    } else {
        document.getElementById("perdiste").innerHTML = "<h1></h1>";
    }
}

//Se inicializa la función de puntos
// sumarPuntos();
setInterval(restarTiempo, 1000);
setInterval(tablero, tiempo);