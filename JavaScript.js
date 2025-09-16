console.log('Init...');

const panel = document.createElement('div',);
//const panel = document.getElementById('panel');

let isDragging = false;

let offsetX; // Desplazamiento X del mouse al hacer clic
let offsetY; // Desplazamiento Y del mouse al hacer clic

let x, y;

function show(x, y) {	

	msg.textContent = x + ':' + y;
}

window.onload = function () {

	// Init
	x = 100; // panel.style.left;
	y = 400;
	show(x, y);

	/* Add Panel */
	panel.id = 'panel';
	panel.style.left = x + 'px';
	panel.style.top = y + 'px';
	panel.style.width = '64px';
	panel.style.height = '64px';
	panel.style.backgroundColor = 'dodgerblue'; /* no usar !importat porque se queda estaticos */
	panel.style.position = 'absolute'; /* Importante para poder moverlo */
	panel.style.cursor = 'grab';

	// Asigna la URL del GIF a la propiedad backgroundImage
	panel.style.backgroundImage = "url('img/ship.png')";

	// Puedes añadir otras propiedades de fondo, como:
	panel.style.backgroundSize = "cover"; // Para que la imagen cubra el div
	panel.style.backgroundRepeat = "no-repeat"; // Para que la imagen no se repita
	panel.style.backgroundPosition = "center"; // Para centrar la imagen

	document.body.appendChild(panel);

	// Evento al presionar el botón del mouse
	panel.addEventListener('mousedown', (e) => {
		isDragging = true;
		// Calcula el desplazamiento relativo del mouse al div
		offsetX = e.clientX - panel.getBoundingClientRect().left;
		offsetY = e.clientY - panel.getBoundingClientRect().top;
		panel.style.cursor = 'grabbing'; // Cambia el cursor a "grabbing"

	});

	// Evento al mover el mouse
	document.addEventListener('mousemove', (e) => {		
		if (isDragging) {
			// Calcula la nueva posición del div
			if (e.clientX > 100 && e.clientX < 800) {
				x = e.clientX - offsetX;
			}

			if (e.clientY > 100 && e.clientY < 800) {
				y = e.clientY - offsetY;
			}

			show(x, y);

			// Actualiza la posición del div
			panel.style.left = x + 'px';
			panel.style.top = y + 'px';
		}
		else {
			show(e.clientX, e.clientY);
		}		
	});

	// Evento al soltar el botón del mouse
	document.addEventListener('mouseup', () => {		
		isDragging = false;
		panel.style.cursor = 'grab'; // Vuelve el cursor a "grab"
	});
}


// keydown	: Se activa cuando se presiona una tecla.
// keyup	: Se activa cuando se suelta una tecla.
window.addEventListener('keydown', function (event) {
	//console.log(event.key);
	//console.log(x);

	if (x === null || x == '' ) x = 0;

	if (event.key === "ArrowLeft") {		
		if (x > 100) {
			x -= 100;		
			panel.style.left = x + 'px';
		}
		show(x, y);
	}

	if (event.key === "ArrowRight") {		
		if (x < 800) {
			x += 100;
			panel.style.left = x + 'px';
		}
		show(x, y);
	}

	if (event.key === "ArrowUp") {
		
	}

	if (event.key === "ArrowDown") {
		
	}

	if (event.key === " ") {
		console.log('space');
		panel.style.backgroundColor = 'lightgreen';
	}

	if (event.key === "Tab") {
		//panel.innerText = "Tab";
	}

	if (event.key === "Shift") {
		panel.style.backgroundColor = 'dodgerblue';
	}

	if (event.key === "Control") {
		panel.style.backgroundColor = 'orange';
	}

	if (event.key === "Enter") {

	}

	if (event.key === "Escape") {

		x = 100;
		//y = 100;

		show(x,y);

		panel.style.left = x + 'px';
		panel.style.top = y + 'px';
	}

	//CapsLock
	//Escape

});
