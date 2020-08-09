import { Scene } from 'phaser';
import { SCENES, TEXTURES, FONTS } from '../constants';

import logo from '../../assets/img/lol-logo.png';
import pixelFontPng from '../../assets/fonts/pixel-shadow/font.png';
import pixelFontXml from '../../assets/fonts/pixel-shadow/font.xml';

export default class Boot extends Scene {
  constructor() {
    super({ key: SCENES.BOOT });
  }

  preload() {
    this.load.image(TEXTURES.LOL_LOGO, logo);
    this.load.bitmapFont(FONTS.PIXEL, pixelFontPng, pixelFontXml);
  }

  create() {
    this.scene.start(SCENES.PRELOADER);
  }
}
