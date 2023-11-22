class Gracias extends Phaser.Scene

{
	

	constructor ()
	{
		super({ key: 'Gracias', active: false})
			
	}

	init ()
	{
		
		
	}
	
	preload()
	{
		this.load.image('comparte', 'assets/imgs/comparte.png');;
		this.load.image('logogracias', 'assets/imgs/logogracias.png');;
	}



	create()
	{	
	this.imagen1 = this.add.image(360,640,"backmenu");
	this.logogracias = this.add.image(180,80,"logogracias");
	this.text = this.add.text(70,180, '¡Gracias por Jugar!', { fontSize: '20px', fill: '#000000', fontWeight: 'bold' });
	this.text2 = this.add.text(100,220, 'Yardas Totales:', { fontSize: '20px', fill: '#000000', fontWeight: 'bold' });

	
	const maxYardasCount = window.maxYardasCount.toFixed(5).toString();
    this.add.text(140, 230, ` \n${maxYardasCount}`, {
      fontSize: '26px',
      fill: '#000000',
      fontWeight: 'bold',
    });

  this.text3 = this.add.text(180, 370, 'Comparte en redes tu resultado\n para participar en sorteo:', {
    fontSize: '18px',
    fill: '#000000',
    fontWeight: 'bold',
    align: 'center', // Align the text to the center horizontally
}).setOrigin(0.5);

  this.text4 = this.add.text(180, 410, 'Consumo gratis por $500', {
    fontSize: '18px',
    fill: '#000000',
    fontWeight: 'bold',
    align: 'center', // Align the text to the center horizontally
}).setOrigin(0.5);


	this.comparte = this.add.image(180,580,"comparte");
	this.comparte.setScale(.30);
	this.comparte.setInteractive();

	
 
	}

	update()
	{

	}



}
