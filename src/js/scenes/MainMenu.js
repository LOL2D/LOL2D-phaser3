import { Scene } from 'phaser';
import { SceneName } from './Constants';

export class MainMenu extends Scene {
  constructor() {
    super({ key: SceneName.MainMenu });
  }

  init() {}
  preload() {}
  create() {

    console.log(this.scale);

    this.text = this.add
      .text(100, 100, 'Menu')
      .setColor('#000');
    this.text.setOrigin(0.5);
  }
}
