import Phaser from 'phaser';
import { SCENES, FONTS } from '../helpers/constants';

import { LolLogo } from '../../assets/AssetImage';
import { pixelFontPng, pixelFontXml } from '../../assets/AssetFont';

export default class Boot extends Phaser.Scene {
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
