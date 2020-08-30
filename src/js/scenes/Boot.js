import { Scene } from 'phaser';
import { SCENES, TEXTURES, FONTS } from '../constants';

import logo from '../../assets/images/lol-logo.png';
import { pixelFontPng, pixelFontXml } from '../../assets/AssetFont';

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
