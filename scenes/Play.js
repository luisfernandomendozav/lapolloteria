let playerLives = 2;
let yardas = 0;
let maxYardasCount = 0;
window.maxYardasCount = 0;

class Play extends Phaser.Scene

{
	

	constructor ()
	{
		super({ key: 'Play', active: false})
			
	}

	init ()
	{
		this.playerSpeed = 0.5;
		this.playerLives = 2; // Initialize the global lives count
		this.yardas = 0;

		
	}
	
	preload()
	{
		this.load.image('backplay', 'assets/imgs/backpollo.png');
		this.load.spritesheet('npc1', 'assets/sprites/npc1sprite.png',{
			frameWidth: 110,
			frameHeight: 110,
		}),
		this.load.spritesheet('npc2', 'assets/sprites/npc2sprite.png',{
			frameWidth: 110,
			frameHeight: 110,
		}),
		this.load.spritesheet('npc3', 'assets/sprites/npc3sprite.png',{
			frameWidth: 110,
			frameHeight: 110,
		}),
		this.load.spritesheet('npc4', 'assets/sprites/npc4sprite.png',{
			frameWidth: 110,
			frameHeight: 110,
		}),
		this.load.image('leftarrow', 'assets/imgs/left.png');
		this.load.image('rightarrow', 'assets/imgs/right.png');
		this.load.audio("bite", ["assets/audio/bite.mp3"]);	
	}

restartScene() {
    this.scene.restart();
		}
		
	

	create()
	{	
		this.rectanguloscore = this.add.rectangle(360, 0, 720, 60, 0x0099ff);
		this.rectanguloscore.setDepth(1);
		this.backplay2 = this.add.tileSprite(360,640,720,1280,'backplay')
		this.buttonleft = this.add.image(260,1200,'leftarrow');
		this.buttonleft.setScale(.25);
		this.buttonleft.setInteractive();
		this.buttonright = this.add.image(460,1200,'rightarrow');
		this.buttonright.setScale(.25);
		this.buttonright.setInteractive();
		this.player1 = this.physics.add.sprite(270,960,'playermenu');
  		this.text = this.add.text(340,10, 'Yardas:', { fontSize: '20px', fill: '#fff' });
  		this.text.setDepth(2);
  		this.timedEvent = this.time.addEvent({ delay: 6000000, callback: this.onClockEvent, callbackScope: this, repeat: 1 });
  		this.text2 = this.add.text(20,10, 'Vidas: ' + playerLives, { fontSize: '20px', fill: '#fff' });
  		this.text2.setDepth(2);
  		this.bite1 = this.sound.add("bite");
		this.npc1 = this.physics.add.sprite(450,200,'npc1');
		this.npc1.setScale(.65);
		this.npc1.speed = Phaser.Math.Between(1,3);
		this.anims.create({
			key: "npc1_anim",
			frames: this.anims.generateFrameNumbers("npc1"),
			frameRate: 10,
			repeat: -1,
		});
		this.npc1.play("npc1_anim");
		this.npc2 = this.physics.add.sprite(90,200,'npc2');
		this.npc2.setScale(.65);
		this.npc2.speed = Phaser.Math.Between(1,3);
		this.anims.create({
			key: "npc2_anim",
			frames: this.anims.generateFrameNumbers("npc2"),
			frameRate: 10,
			repeat: -1,
		});
		this.npc2.play("npc2_anim");
		this.npc3 = this.physics.add.sprite(270,200,'npc3');
		this.npc3.setScale(.65);
		this.npc3.speed = Phaser.Math.Between(1,3);
		this.anims.create({
			key: "npc3_anim",
			frames: this.anims.generateFrameNumbers("npc3"),
			frameRate: 10,
			repeat: -1,
		});
		this.npc3.play("npc3_anim");
		this.npc4 = this.physics.add.sprite(630,200,'npc4');
		this.npc4.setScale(.65);
		this.npc4.speed = Phaser.Math.Between(1,3);
		this.anims.create({
			key: "npc4_anim",
			frames: this.anims.generateFrameNumbers("npc4"),
			frameRate: 10,
			repeat: -1,
		});
		this.npc4.play("npc4_anim");

		

		this.physics.add.collider(this.player1, this.npc1, () => {
  			this.player1.destroy();
  			this.bite1.play();
  			if (playerLives > 0) {
        playerLives--;
        this.text2.setText('Lives: ' + playerLives);
  				this.restartScene();
  				}
                  });
  				
  				
  				
  		

  		this.physics.add.collider(this.player1, this.npc2, (player1, npc2) => {
  			player1.destroy();
  			this.bite1.play();
  			if (playerLives > 0) {
        playerLives--;
        this.text2.setText('Lives: ' + playerLives);
  				this.restartScene();
  	
  			}
  				
  		});

		this.physics.add.collider(this.player1, this.npc3, (player1, npc3) => {
  			player1.destroy();
  			this.bite1.play();
  			if (playerLives > 0) {
        playerLives--;
        this.text2.setText('Lives: ' + playerLives);
  				this.restartScene();
  			
  			}
  				
  		});

		this.physics.add.collider(this.player1, this.npc4, (player1, npc4) => {
  			player1.destroy();
  			this.bite1.play();
  			if (playerLives > 0) {
        playerLives--;
        this.text2.setText('Lives: ' + playerLives);
  				this.restartScene();
  			}
  				
  		});
		
		
  		
 	this.isRunning = false;
  	this.buttonleft.on("pointerdown", () => {
  		if(!this.isRunning && this.player1.x > 90) {
  			this.isRunning = true;
  			this.player1.x -=180;

  		}

      this.isRunning = true;
  });
  this.buttonleft.on("pointerup", () => {
     this.isRunning = false;
  });

  this.isRunning2 = false;
  	this.buttonright.on("pointerdown", () => {
  		if(!this.isRunning2 && this.player1.x < 630) {
  			this.isRunning2 = true;
  			this.player1.x +=180;
  		}

      this.isRunning2 = true;
  });
  this.buttonright.on("pointerup", () => {
     this.isRunning2 = false;
  });

}

		//this move the npc down and reset the position when y>640
	moveNpc(npc1, speed) {
			npc1.y += speed;
			if (npc1.y > 1280) 
				this.resetMovePos(npc1);
				}
		
	
	resetMovePos(npc1){
		npc1.y = 0;
		npc1.speed = Phaser.Math.Between(1, 3);

		}


		moveNpc2(npc2, speed) {
			npc2.y += speed;
			if (npc2.y > 1280) 
				this.resetMovePos(npc2);
		}

	resetMovePos(npc2){
		npc2.y = 0;
		npc2.speed = Phaser.Math.Between(1, 3);
		
	}

	moveNpc3(npc3, speed) {
			npc3.y += speed;
			if (npc3.y > 1280)
				this.resetMovePos(npc3);
				
		}

	resetMovePos(npc3){
		npc3.y = 0;
		npc3.speed = Phaser.Math.Between(1, 3);
		
	}

	moveNpc4(npc4, speed) {
			npc4.y += speed;
			if (npc4.y > 1280)
				this.resetMovePos(npc4);
				
		}

	resetMovePos(npc4){
		npc4.y = 0;
		npc4.speed = Phaser.Math.Between(1, 3);
		
	}


respawnPlayer() {
    this.player1 = this.physics.add.sprite(270, 800, 'player1');
	}

	

	update()
	{
		this.backplay2.tilePositionY += 2;
	if (playerLives > 0) {
    yardas += this.timedEvent.getElapsedSeconds() / 1000;
    this.text.setText('Yardas: ' + yardas.toFixed(2));
	}

	this.time.addEvent({
    delay: 1000,
    callback: () => {
        if (playerLives === 0) {     
            this.scene.start('Gracias', { maxYardasCount: window.maxYardasCount });
        }
    },
    callbackScope: this
	});

if (yardas > window.maxYardasCount) {
    window.maxYardasCount = yardas;}

this.time.addEvent({
			delay : 3000,
			callback: () => {this.moveNpc(this.npc1, this.npc1.speed)},
			callbackScope: this
		})

this.time.addEvent({
			delay : 5000,
			callback: () => {this.moveNpc2(this.npc2, this.npc2.speed)},
			callbackScope: this
		})
this.time.addEvent({
			delay : 6500,
			callback: () => {this.moveNpc3(this.npc3, this.npc3.speed)},
			callbackScope: this
		})
this.time.addEvent({
			delay : 7500,
			callback: () => {this.moveNpc4(this.npc4, this.npc4.speed)},
			callbackScope: this
		})

		
		}

}
