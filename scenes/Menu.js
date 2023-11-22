class Menu extends Phaser.Scene

{
	constructor ()
	{
		super({ key: 'Menu', active: false})
	}


	init ()
	{

	}

	preload ()
	{

this.load.image('backmenu', 'assets/imgs/backmenufinal.png');
this.load.image('hand', 'assets/imgs/hand.png');
this.load.image('logomenu', 'assets/imgs/imagen13.png');
this.load.image('instrucciones', 'assets/imgs/instrucciones.png');
this.load.image('botonstart', 'assets/imgs/botonstart.png');
this.load.image('partecampo', 'assets/imgs/instmenufu.png');
this.load.image('leftmenu', 'assets/imgs/leftmenu.png');
this.load.image('rightmenu', 'assets/imgs/rightmenu.png');
this.load.image('playermenu', 'assets/imgs/charactermenu.png');
this.load.audio("whistle", ["assets/audio/whistle.mp3"]);

this.load.spritesheet('npc1menu', 'assets/sprites/npc1spritefff.png',{
			frameWidth: 110,
			frameHeight: 110,
		}),
		this.load.spritesheet('npc2menu', 'assets/sprites/npc2spritef.png',{
			frameWidth: 110,
			frameHeight: 110,
		}),
		this.load.spritesheet('npc3menu', 'assets/sprites/npc3spritef.png',{
			frameWidth: 110,
			frameHeight: 110,
		}),
		this.load.spritesheet('npc4menu', 'assets/sprites/npc4spritef.png',{
			frameWidth: 110,
			frameHeight: 110,
		});


	}
	create ()
	{
		this.imagen1 = this.add.image(360,640,"backmenu");
		this.imagen2 = this.add.image(360,115,"logomenu");
		this.imagen2.setScale(.75);
		this.imagen7 = this.add.image(360,350,"instrucciones");
		this.imagen7.setScale(.60);
		this.imagen3 = this.add.image(360,1195,"botonstart");
		this.imagen3.setScale(.40);
		this.imagen3.setInteractive();
		this.imagen4 = this.add.image(360,870,"partecampo");
		this.imagen5 = this.add.image(260,990,"leftmenu");
		this.imagen5.setScale(.45);
		this.imagen5.setInteractive();
		this.imagen6 = this.add.image(460,990,"rightmenu");
		this.imagen6.setScale(.45);
		this.imagen6.setInteractive();

		this.imagen8 = this.add.image(520,1120,"hand");
		this.imagen8.setInteractive();


		this.playermenu = this.physics.add.sprite(270,790,'playermenu');
		this.playermenu.setScale(2);
		
		this.isRunning = false;
  	this.imagen5.on("pointerdown", () => {
  		if(!this.isRunning && this.playermenu.x > 90) {
  			this.isRunning = true;
  			this.playermenu.x -=180;

  		}

      this.isRunning = true;
  });
  this.imagen5.on("pointerup", () => {
     this.isRunning = false;
  });

  this.isRunning2 = false;
  	this.imagen6.on("pointerdown", () => {
  		if(!this.isRunning2 && this.playermenu.x < 630) {
  			this.isRunning2 = true;
  			this.playermenu.x +=180;
  		}

      this.isRunning2 = true;
  });
  this.imagen6.on("pointerup", () => {
     this.isRunning2 = false;
  });
	

this.npc1menu = this.physics.add.sprite(90,650,'npc1menu');
		this.anims.create({
			key: "npc1menu_anim",
			frames: this.anims.generateFrameNumbers("npc1menu"),
			frameRate: 10,
			repeat: -1,
		});


		
		this.music = this.sound.add("whistle");

		var musicConfig = {
			mute: false,
			volume: 1,
			rate: 1,
			detune: 0,
			seek: 0,
			loop: false,
			delay: 0
		}
	
	this.imagen3.on("pointerdown", () => {
        this.scene.start("Play");
    });
		
	}

}