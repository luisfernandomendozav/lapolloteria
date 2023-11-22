class Boot extends Phaser.Scene

{
	constructor ()
	{
		super({ key: 'Boot', active: true})
	}


	init ()
	{
		this.URL = this.sys.game.URL;
		this.CONFIG = this.sys.game.CONFIG;
	}

	preload ()
	{

	}
	create ()
	{
		this.scene.start('Preload');
	}

}