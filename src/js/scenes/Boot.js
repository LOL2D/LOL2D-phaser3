import { Scene } from 'phaser';
import { SCENES, FONTS, TEXTURES } from '../constants';

import logo from '../../assets/img/lol-logo.png';
import fontBitmapPng from '../../assets/fonts/font.png';
import fontBitmapXml from '../../assets/fonts/font.xml';

export default class Boot extends Scene {
  constructor() {
    super({ key: SCENES.BOOT });
  }

  preload() {
    this.load.image(TEXTURES.LOL_LOGO, logo);
    this.load.bitmapFont(FONTS.bitmapFont, fontBitmapPng, fontBitmapXml);
  }

  create() {
    this.scene.start(SCENES.PRELOAD);
  }
}
