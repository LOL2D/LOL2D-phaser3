import Phaser from 'phaser';
import { SCENES, TEXTURES, FONTS } from '../constants';

import logoImg from '../../assets/img/phaser-logo.png';

export default class Preload extends Phaser.Scene {
  constructor() {
    super({ key: SCENES.PRELOAD });
  }

  preload() {
    // create loading bar
    this.createLoadingBar();

    // loading assets
    this.load.image(TEXTURES.LOGO_PHASER, logoImg);
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
      100,
      0
    );

    this.graphics = this.add.graphics();
    this.newGraphics = this.add.graphics();

    this.graphics.fillStyle(0x303030, 1);
    this.graphics.fillRectShape(progressBar);

    this.newGraphics.fillStyle(0x767576, 1);
    this.newGraphics.fillRectShape(progressBarFill);

    // texts
    // const percentText = this.add.bitmapText(x, y, FONTS.bitmapFont, '100%', 16);
    // percentText.setOrigin(0.5);

    // logo
    const logo = this.add.image(x, y - 85, TEXTURES.LOL_LOGO);
    logo.setOrigin(0.5);

    // events
    this.load.on(Phaser.Loader.Events.FILE_PROGRESS, (file) => {});
    this.load.on(Phaser.Loader.Events.PROGRESS, (value) => {
      progressBarFill.setSize(value * (w - border * 2), h - border * 2);
      this.newGraphics.clear();
      this.newGraphics.fillStyle(0x767576, 1);
      this.newGraphics.fillRectShape(progressBarFill);
    });
  }
}
