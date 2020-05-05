import { Scene } from 'phaser';
import { SCENES } from '../constants';

import upheavalFnt from '../../assets/fonts/upheaval/converted-to-bitmap/font.fnt';
import upheavalPng from '../../assets/fonts/upheaval/converted-to-bitmap/font.png';

export default class Boot extends Scene {
  constructor() {
    super({ key: SCENES.BOOT });
  }

  init() {}

  preload() {
    // Font for preload
    // ...fonts
    this.load.bitmapFont('upheaval', upheavalPng, upheavalFnt);
  }

  create() {
    // this.text = this.add.bitmapText(
    //   this.scale.width * 0.5,
    //   this.scale.height * 0.5,
    //   'upheaval',
    //   'Bitmap Fonts!',
    //   64
    // );

    // this.text.setOrigin(0.5);

    this.scene.start(SCENES.PRELOAD);
  }
}
