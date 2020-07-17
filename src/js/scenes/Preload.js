import Phaser from 'phaser';
import { SCENES, TEXTURES, FONTS } from '../constants';

import phaserLogo from '../../assets/img/phaser-logo.png';

export default class Preload extends Phaser.Scene {
  constructor() {
    super({ key: SCENES.PRELOAD });
  }

  preload() {
    // create loading bar
    this.createLoadingBar();

    // loading assets
    this.load.image(TEXTURES.PHASER_LOGO, phaserLogo);
  }

  createLoadingBar() {
    const x = this.game.config.width / 2;
    const y = this.game.config.height / 2;
    const w = 250;
    const h = 40;
    const border = 7;

    const left = x - w / 2;
    const top = y - h / 2;

    // bars
    const progressBar = new Phaser.Geom.Rectangle(left, top, w, h);
    const progressBarFill = new Phaser.Geom.Rectangle(
      left + border,
      top + border,
      1,
      h - border * 2
    );

    this.graphicsBar = this.add.graphics();
    this.graphicsBarFill = this.add.graphics();

    this.graphicsBar.fillStyle(0x303030, 1);
    this.graphicsBar.fillRectShape(progressBar);

    this.graphicsBarFill.fillStyle(0x767576, 1);
    this.graphicsBarFill.fillRectShape(progressBarFill);

    // texts
    const percentText = this.add.bitmapText(x, y - 5, FONTS.PIXEL, '100%', 15);
    percentText.setOrigin(0.5);

    const assetsText = this.add.bitmapText(
      10,
      this.game.config.height - 10,
      FONTS.PIXEL,
      'Đang tải',
      13
    );
    assetsText.setOrigin(0, 1);

    // logo
    const logo = this.add.image(x, y - 85, TEXTURES.LOL_LOGO);
    logo.setOrigin(0.5);

    // events
    this.load.on(Phaser.Loader.Events.FILE_PROGRESS, (file) => {
      assetsText.setText(`Đang tải ${file.key}...`);
    });
    this.load.on(Phaser.Loader.Events.PROGRESS, (value) => {
      percentText.setText(`${Math.floor(value * 100)}%`);
      progressBarFill.setSize(value * (w - border * 2), h - border * 2);
      this.graphicsBarFill.clear();
      this.graphicsBarFill.fillStyle(0x767576, 1);
      this.graphicsBarFill.fillRectShape(progressBarFill);
    });
    this.load.on(Phaser.Loader.Events.COMPLETE, () => {
      this.tween = this.tweens.add({
        targets: logo,
        // x: 55,
        // y: 55,
        props: {
          x: { value: 55, duration: 3000, ease: 'Power2' },
          y: { value: 55, duration: 1500, ease: 'Bounce.easeOut' },
        },
        duration: 500,
        ease: 'Cubic',
        onComplete: () => {
          this.scene.start(SCENES.MAINMENU);
        },
      });

      this.tween = this.tweens.add({
        targets: [
          this.graphicsBar,
          this.graphicsBarFill,
          percentText,
          progressBarFill,
          assetsText,
        ],
        alpha: 0,
        duration: 3000,
        ease: 'Cubic',
        onComplete: () => {
          this.graphicsBar.destroy();
          this.graphicsBarFill.destroy();
        },
      });
    });
  }
}
