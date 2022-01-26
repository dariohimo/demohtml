

let miBoton = document.getElementById("miBoton");

/*
miBoton.addEventListener("click",saludar => {
    console.log("flecha2"); 
    alert("Bienvenido")       });
*/
/*
var audio = new Audio("soundfile.wav");

document.onclick = function() {
  audio.play();
}
*/
/* 
//https://www.codegrepper.com/code-examples/javascript/how+to+add+sound+to+click+listener+javascript
//
function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
    audio.play();
  }
*/

miBoton.addEventListener("click",play => {
    let audio = new Audio('http://www.sonidosmp3gratis.com/sounds/ringtones-iphone-8-plus.mp3');
    audio.play();
    
} );

/*
miBoton.addEventListener("click",detener);

function detener() {
    musica = new Audio('http://www.sonidosmp3gratis.com/sounds/ringtones-iphone-8-plus.mp3');
    musica.pause();
    musica.currentTime = 0;
    alert("pausar");

}
*/
//miBoton.addEventListener("onended", pause => alert("audio pausado") );




miBoton.addEventListener("mouseenter",mouseEnter => (miBoton.style.background = "red") );
miBoton.addEventListener("mouseleave",mouseEnter => (miBoton.style.background = "White") );

miBoton.addEventListener("click",saludar => alert("Bienvenido") );


miBoton.addEventListener("click",despedir);



/* play("http://www.sonidosmp3gratis.com/sounds/ringtones-iphone-8-plus.mp3")

function saludar() {
    alert("Hola, como estás");
    console.log("saludando");
}
*/
function despedir() {
    alert("Me voy a Dios")
}

