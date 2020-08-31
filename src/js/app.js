import Phaser from 'phaser';
import rexPlugins from './utils/RexPlugins';

import { SCENES, COLORS } from './constants';
import { Boot, Preloader, MainMenu, InGame } from './scenes';

export default class App {
  constructor() {
    this.VERSION = '0.0.1';
    this.IS_DEV = true;
  }

  start() {
    // Game config
    const config = {
      // basic
      type: Phaser.AUTO,
      width: 1280,
      height: 720,
      backgroundColor: COLORS.DARKERBACKGOURND,
      disableContextMenu: true,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      autoRound: false,
      pixelArt: true,

      // physics
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
        },
      },

      // scenes
      scene: [Boot, Preloader, MainMenu, InGame],

      // dom
      parent: 'phaser-app',
      dom: {
        createContainer: true,
      },

      // plugins
      plugins: rexPlugins,
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
