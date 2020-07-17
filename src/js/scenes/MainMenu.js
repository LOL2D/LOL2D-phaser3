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
      key: TEXTURES.PHASER_LOGO,
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

    // logo
    const logo = this.add.image(55, 55, TEXTURES.LOL_LOGO);
    logo.setOrigin(0.5);

    // this.scale.startFullscreen();
    // this.scale.stopFullscreen();

    this.scale.lockOrientation(Phaser.Scale.LANDSCAPE);
  }

  onPressed() {
    console.log('I am pressed!');
  }
}
