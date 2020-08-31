import { Scene } from 'phaser';
import { SCENES, FONTS } from '../constants';

import { LolLogo } from '../../assets/AssetImage';
import { pixelFontPng, pixelFontXml } from '../../assets/AssetFont';

export default class Boot extends Scene {
  constructor() {
    super({ key: SCENES.BOOT });
  }

  preload() {
    this.load.image('LolLogo', LolLogo);
    this.load.bitmapFont(FONTS.PIXEL, pixelFontPng, pixelFontXml);
  }

  create() {
    this.scene.start(SCENES.PRELOADER);
  }
}
