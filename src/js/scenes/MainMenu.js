import Phaser from 'phaser';
import { SCENES, TEXTURES } from '../constants';
import { BasicButton } from '../helpers';

export default class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: SCENES.MAINMENU });
  }

  // init() {}

  // preload() {}

  create() {
    const button = new BasicButton({
      scene: this,
      key: TEXTURES.LOGO_PHASER,
      up: 0,
      over: 1,
      down: 2,
      x: this.scale.width / 2,
      y: this.scale.height / 2,
    });

    button.on(
      Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,
      this.onPressed,
      this
    );

    // this

    // this.scene.start(SCENES.INGAME);
  }

  onPressed() {
    console.log('I am pressed!');
  }
}
