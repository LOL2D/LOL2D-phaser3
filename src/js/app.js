import Phaser from 'phaser';
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';

import { SCENES } from './constants';
import { Boot, Preloader, MainMenu, InGame } from './scenes';

export default class App {
  constructor() {
    this.VERSION = '0.0.1';
    this.IS_DEV = true;
  }

  start() {
    // Game config
    const config = {
      type: Phaser.AUTO,
      width: 1280,
      height: 720,
      backgroundColor: '0x101010',
      // pixelArt: true,
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
        },
      },

      scene: [Boot, Preloader, MainMenu, InGame],

      disableContextMenu: true,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      autoRound: false,

      // plugins
      plugins: {
        scene: [
          {
            key: 'rexUI',
            plugin: UIPlugin,
            mapping: 'rexUI',
          },
        ],
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
