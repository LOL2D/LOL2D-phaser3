import { Scene } from 'phaser';
import { SCENES } from '../constants';

export default class MainMenu extends Scene {
  constructor() {
    super({ key: SCENES.MAINMENU });
  }

  // init() {}

  // preload() {}

  create() {
    this.scene.start(SCENES.INGAME);
  }
}
