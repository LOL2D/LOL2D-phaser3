import Phaser from 'phaser';
import { SCENES, COLORS } from '../helpers/constants';
import { NormalCursor } from '../../assets/AssetImage';
import Player from '../core/Player';

export default class InGame extends Phaser.Scene {
  constructor() {
    super({ key: SCENES.INGAME });
  }

  // -- LIFECYCLE --
  init() {
    this.centerX = this.game.config.width / 2;
    this.centerY = this.game.config.height / 2;
  }

  // preload() {}

  create() {
    // background
    // const background = this.add.tileSprite(
    //   0,
    //   0,
    //   1920,
    //   1920,
    //   'DebugGridBackground'
    // );
    // background.setOrigin(0, 0);
    // background.setAlpha(0.2);

    this.input.setDefaultCursor(`url(${NormalCursor}), default`);
    this.createFadeInEffect();

    // this.player = new Player({
    //   x: this.centerX,
    //   y: this.centerY,
    //   name: 'Player1',
    //   scene: this,
    // });

    // this.cameras.main.startFollow(this.player.playerObj);
    // this.cameras.main.setBounds(0, 0, 1920, 1920);
  }

  update() {
    if (this.player) {
      this.player.update();
    }
  }

  // -- FUNCTIONS --
  createFadeInEffect() {
    // fade in effect
    const rect = this.add.rectangle(
      this.centerX,
      this.centerY,
      this.centerX * 2,
      this.centerY * 2,
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
