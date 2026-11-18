import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
  constructor() {
    // Registrem l'escena amb la clau 'MainScene' per recuperar-la des de Vue
    super('MainScene');
  }

  // 1. S'executa UN SOL COP en iniciar l'escena: creem els GameObjects
  create() {
    // Dibuixem un cercle verd al centre (x=320, y=200, radi=24px)
    this.avatar = this.add.circle(320, 200, 24, 0x10b981);

    // Afegim un text flotant damunt l'avatar i el centrem amb .setOrigin(0.5)
    this.etiqueta = this.add.text(320, 160, 'Anna', {
      fontSize: '18px', fontFamily: 'sans-serif', color: '#ffffff'
    }).setOrigin(0.5);
  }

  // 2. Bucle continu a 60 FPS: s'executa 60 vegades per segon
  update(time) {
    // Fem oscil·lar l'avatar amunt i avall per verificar que el Game Loop batega
    this.avatar.y = 200 + Math.sin(time * 0.004) * 8;
    // Actualitzem la posició del nom perquè segueixi sempre l'avatar
    this.etiqueta.setPosition(this.avatar.x, this.avatar.y - 38);
  }
  // [NOU] Afegeix aquest mètode DINS de class MainScene (abans de tancar })
  actualitzarNom(nouNom) {
    // ?. evita errors si l'escena encara carrega; || 'Anònim' evita text buit
    this.etiqueta?.setText(nouNom || 'Anònim');
    }
  canviarColor(hexColor) {
  const color = parseInt(hexColor.replace('#', ''), 16);
  this.avatar?.setFillStyle(color);
  }


}
