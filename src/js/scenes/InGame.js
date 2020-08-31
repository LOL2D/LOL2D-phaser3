import Phaser from 'phaser';
import { SCENES, FONTS, COLORS } from '../constants';
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

    const text = this.add.bitmapText(
      centerX,
      centerY,
      FONTS.PIXEL,
      'Coming Soon',
      16,
      0
    );
    text.setOrigin(0.5);

    // physic effect
    const particles = this.add.particles('BlueDot');

    const emitter = particles.createEmitter({
      speed: { min: 20, max: 150 },
      scale: { start: 1, end: 0 },
      lifespan: { min: 500, max: 2000 },
      blendMode: 'ADD',
    });

    const logo = this.physics.add.image(400, 100, 'LolLogo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);

    // fade in effect
    const rect = this.add.rectangle(
      centerX,
      centerY,
      centerX * 2,
      centerY * 2,
      COLORS.GRAY1
    );
    this.tweens.add({
      targets: rect,
      fillAlpha: 0,
      delay: 200,
      duration: 800,
      ease: 'easeIn',
      onComplete: () => {
        rect.destroy();
      },
    });
  }

  // update() {}
}
