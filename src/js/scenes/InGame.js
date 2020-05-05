import Phaser from 'phaser';
import { SCENES, TEXTURES } from '../constants';

export default class InGame extends Phaser.Scene {
  constructor() {
    super({ key: SCENES.INGAME });
  }

  // init() {}

  // preload() {}

  create() {
    const bg = this.add.image(
      this.scale.width * 0.5,
      this.scale.height * 0.5,
      TEXTURES.SKY
    );
    bg.setDisplaySize(this.scale.width, this.scale.height);

    const particles = this.add.particles(TEXTURES.RED_PARTICLE);

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });

    const logo = this.physics.add.image(400, 100, TEXTURES.LOGO_PHASER);

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }
}
