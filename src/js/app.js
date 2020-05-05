import Phaser from 'phaser';
import { SCENES } from './constants';
import { Boot, Preload, MainMenu, InGame } from './scenes';

export default class App {
  constructor() {
    this.VERSION = '0.0.1';
    this.IS_DEV = true;
  }

  start() {
    // Scenes
    const scenes = [Boot, Preload, MainMenu, InGame];

    // Game config
    const config = {
      type: Phaser.AUTO,
      scene: scenes,

      width: 800,
      height: 600,
      backgroundColor: '#000',

      disableContextMenu: true,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
    };

    // Create game app
    const game = new Phaser.Game(config);

    // Globals
    game.VERSION = this.VERSION;
    game.IS_DEV = this.IS_DEV;

    game.CONFIG = {};

    // Settings
    game.SETTINGS = {
      soundOn: true,
    };

    // Start game app
    game.scene.start(SCENES.BOOT);
  }
}
