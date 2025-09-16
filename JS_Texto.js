
var text;
var allowHtml = 1;

window.onload = function (event) {

	const nuevoDiv = document.createElement('div',);

	nuevoDiv.id = 'panel';
	nuevoDiv.textContent = 'Otro div agregado con window.onload.';
	nuevoDiv.style.backgroundColor = 'lightgreen';
	nuevoDiv.style.padding = '10px';
	nuevoDiv.style.marginTop = '10px';

	document.body.appendChild(nuevoDiv);

	console.log('El div se agregó usando window.onload.');
};

window.addEventListener('keydown', function (event) {

	// keydown	: Se activa cuando se presiona una tecla.
	// keyup	: Se activa cuando se suelta una tecla.

	text += event.key;

	if (event.key === "Enter") {

		if (allowHtml) {

			log('</br>');
		}
		else {
			log('\r\n');
		}
	}
	else {
		log(text);
	}
});


function log(text) {
	
	if (allowHtml) {

		panel.innerHTML += text;
	}
	else {
		panel.textContent += text;
	}
}