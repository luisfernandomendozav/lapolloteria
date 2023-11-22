const App = function ()
{

	'use strict';

	this.VERSION = '0.0.1';

};

App.prototype.start = function()
{
'use strict';

		// Scenes 


		// Game config
const config = {
	type : Phaser.AUTO,
	parent : 'phaser-app',
	tittle : 'La Polloteria Football',
	width : 720,
	height : 1280,
	scene:[Preload, Menu, Play, Gracias],
	pixelArt : false,
	backgroundColor : 0xFFFFFF,
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
		}
	}
	
};

// Create game app
	const game = new Phaser.Game(config);

//Globals
	game.IS_DEV = this.IS_DEV;
	game.VERSION = this.VERSION;
	


	game.CONFIG = {
		width : config.width,
		height: config.height,
		centerX : Math.round(0.5 * config.width),
		ceterY : Math.round(0.5 * config.height),
		tile : 32,
		map_offset : 4
		
        
	};

//Sound
	game.sound_on = true;

};
