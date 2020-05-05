import { Scene } from 'phaser';
import { SCENES } from '../constants';

export default class Preload extends Scene {
  constructor() {
    super({ key: SCENES.PRELOAD });
  }

  init() {
    // Globals
  }

  preload() {
    // Create Loading Bar
    this.createLoadingBar();

    // Spritesheets
  }

  create() {
    this.scene.start(SCENES.MAINMENU);
  }

  createLoadingBar() {
    // Title
    // Progress text
    // Progress bar
  }
}
