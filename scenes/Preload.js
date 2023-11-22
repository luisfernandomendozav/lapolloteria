class Preload extends Phaser.Scene

{
	constructor ()
	{
		super({ key: 'Preload', active: false})
	}


	init ()
	{
		this.URL = this.sys.game.URL;
		this.CONFIG = this.sys.game.CONFIG;
	}

	preload ()
	{
			this.load.image('balon', 'assets/imgs/ball.png');
			this.load.image('logopolloteria', 'assets/imgs/onlybird.png');
			this.load.image('come', 'assets/imgs/comepollito2.png');

	
	}
	create ()
	{
		


		this.time.addEvent({
			delay : 4000,
			callback: () => {this.scene.start('Menu');},
			callbackScop: this
		})
			this.text = this.add.text(0,0, 'Cargando....');
			this.text.setScale(3.0);
			this.text.setTint(0xFFA500);
			this.imagen4 = this.add.image(480,690,"balon");
			this.imagen4.setScale(.30);
			this.imagen4.setDepth(2);
			this.imagen2 = this.add.image(280,600,"logopolloteria");
			this.imagen3 = this.add.image(360,1050,"come");

		

	
	}
	


	}