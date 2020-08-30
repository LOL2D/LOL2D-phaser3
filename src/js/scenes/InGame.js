import Phaser from 'phaser';
import { SCENES, TEXTURES, FONTS } from '../constants';
import Player from '../classes/Player';

export default class InGame extends Phaser.Scene {
  constructor() {
    super({ key: SCENES.INGAME });
  }

  // init() {}

  // preload() {}

  create() {
    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;

    this.player = new Player({
      scene: this,
    });

    const yasuo = this.add.image(centerX, centerY, 'yasuo');
    yasuo.alpha = 0.5;

    const text = this.add.bitmapText(
      centerX,
      centerY,
      FONTS.PIXEL,
      'Coming Soon',
      16,
      0
    );
    text.setOrigin(0.5);

    // fade in effect
    const rect = this.add.rectangle(
      centerX,
      centerY,
      centerX * 2,
      centerY * 2,
      0xffffff
    );
    this.tweens.add({
      targets: rect,
      fillAlpha: 0,
      delay: 200,
      duration: 1000,
      ease: 'easeOut',
      onComplete: () => {
        // this.scene.start(SCENES.INGAME);
      },
    });
  }

  update() {}
}

// const bg = this.add.image(
//   this.scale.width * 0.5,
//   this.scale.height * 0.5,
//   TEXTURES.SKY
// );
// bg.setDisplaySize(this.scale.width, this.scale.height);

// const particles = this.add.particles(TEXTURES.LOL_LOGO);

// const emitter = particles.createEmitter({
//   speed: 150,
//   scale: { start: 1, end: 0 },
//   blendMode: 'ADD',
// });

// const logo = this.physics.add.image(400, 100, TEXTURES.PHASER_LOGO);

// logo.setVelocity(100, 200);
// logo.setBounce(1, 1);
// logo.setCollideWorldBounds(true);

// emitter.startFollow(logo);
