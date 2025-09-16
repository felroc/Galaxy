
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var x = 10, y = 10;

window.onload = function () {
	drawBar();
}


function drawBar() {

	ctx.fillStyle = "gray"; // Establecer el color de relleno
	ctx.fillRect(x, y, 150, 20); // x, y, ancho, alto

	ctx.strokeStyle = "white"; // Establecer el color del contorno
	ctx.strokeRect(x, y, 150, 20); // x, y, ancho, alto
}