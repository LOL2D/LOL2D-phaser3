import Phaser from 'phaser';
import { SCENES, FONTS, COLORS } from '../constants';
import { NormalCursor } from '../../assets/AssetImage';
// import Player from '../classes/Player';

export default class InGame extends Phaser.Scene {
  constructor() {
    super({ key: SCENES.INGAME });
  }

  // init() {}

  // preload() {}

  create() {
    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;

    this.input.setDefaultCursor(`url(${NormalCursor}), default`);

    // this.player = new Player({
    //   scene: this,
    // });

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

    const size = 75;

    const logo = this.physics.add.image(400, 100, 'LolLogo');
    logo.body.setCircle(size);
    logo
      .setSize(size, size)
      .setDisplaySize(size, size)
      .setVelocity(100, 200)
      .setBounce(1, 1)
      .setCollideWorldBounds(true);

    emitter.startFollow(logo);

    // collide with mouse effect
    const yasuo = this.physics.add.image(400, 400, 'Yasuo');
    yasuo.body.setCircle(size);
    yasuo
      .setSize(size, size)
      .setDisplaySize(size, size)
      .setBounce(1, 1)
      .setCollideWorldBounds(true);

    this.physics.add.collider(logo, yasuo);

    this.input.on(Phaser.Input.Events.POINTER_MOVE, (pointer) => {
      this.physics.moveToObject(yasuo, pointer, 150);
    });

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
}
