import Phaser from 'phaser';
import { SCENES, TEXTURES, FONTS } from '../constants';

import { PhaserLogo, Yasuo } from '../../assets/AssetImage';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super({ key: SCENES.PRELOADER });
  }

  preload() {
    // create loading bar
    this.createLoadingBar();

    // loading assets
    this.load.image(TEXTURES.PHASER_LOGO, PhaserLogo);

    this.load.image('yasuo', Yasuo);
  }

  createLoadingBar() {
    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;
    const w = 250;
    const h = 40;
    const border = 7;

    const left = centerX - w / 2;
    const top = centerY - h / 2;

    // ==== UI ====

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
    const percentText = this.add.bitmapText(
      centerX,
      centerY - 5,
      FONTS.PIXEL,
      '100%',
      15
    );
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
    const logo = this.add.image(centerX, centerY - 85, TEXTURES.LOL_LOGO);
    logo.setOrigin(0.5);

    // ==== EVENTS ====

    // on file load
    this.load.on(Phaser.Loader.Events.FILE_PROGRESS, (file) => {
      assetsText.setText(`Đang tải ${file.type} ${file.key}...`);
    });

    // onload
    this.load.on(Phaser.Loader.Events.PROGRESS, (value) => {
      percentText.setText(`${Math.floor(value * 100)}%`);
      progressBarFill.setSize(value * (w - border * 2), h - border * 2);
      this.graphicsBarFill.clear();
      this.graphicsBarFill.fillStyle(0x767576, 1);
      this.graphicsBarFill.fillRectShape(progressBarFill);
    });

    // on load completed
    this.load.on(Phaser.Loader.Events.COMPLETE, () => {
      // hide elements
      this.tweens.add({
        targets: [
          this.graphicsBar,
          this.graphicsBarFill,
          percentText,
          progressBarFill,
          assetsText,
        ],
        alpha: 0,
        duration: 500,
        delay: 500,
        ease: 'Cubic',
        onComplete: () => {
          this.graphicsBar.destroy();
          this.graphicsBarFill.destroy();
        },
      });

      // move logo
      this.tweens.add({
        targets: logo,
        x: centerX,
        y: centerY,
        duration: 1000,
        delay: 1000,
        ease: 'Cubic',
        onStart: () => {
          percentText.setText('');
          assetsText.setText('');
        },
        onComplete: () => {
          this.scene.start(SCENES.MAINMENU);
        },
      });
    });
  }
}
