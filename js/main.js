function resizeApp ()
{
	//funcion para resize del tamaño de la pantalla para mobile
	'use strict';

	let game_ratio = (720) / (1280);

	let div = document.getElementById('phaser-app');
	div.style.width = (window.innerHeight * game_ratio) + 'px';
	div.style.height = window.innerHeight + 'px';

	let canvas = document.getElementsByTagName('canvas')[0];

	let dpi_w = (parseInt(div.style.width) / canvas.width);
	let dpi_h = (parseInt(div.style.height) / canvas.height);

	let height = window.innerHeight * (dpi_w / dpi_h);
	let width = height * game_ratio;

	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';
}

function runApp ()
{
	'use strict';

let app = new App ();
app.start();

window.addEventListener('resize', resizeApp);
resizeApp();

}
//CREAR JUEGO PHASER
window.onload = function ()
{
	'use strict';
	// Check ES6
	try
	{
		eval('let i = 0;');
		eval('const _dev =true;');

	}
	catch (e)
	{
		alert ('This browser is not supported. Use Chrome or Firefox.');
		return false;
	}
	// Launch the game
		runApp();

	
};