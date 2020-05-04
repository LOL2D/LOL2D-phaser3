import Phaser from 'phaser';
import { SceneName } from '../js/scenes/Constants';
import { Boot, Preload, MainMenu, InGame } from '../js/scenes/Scenes';

const App = function () {
  this.VERSION = '0.0.1';
  this.IS_DEV = true;
};

App.prototype.start = function () {
  // Scenes
  const scenes = [Boot, Preload, MainMenu, InGame];

  // Game config
  const config = {
    type: Phaser.AUTO,

    parent: 'phaser-app',
    backgroundColor: '#efefef',
    pixelArt: true,

    scene: scenes,

    scale: {
      parent: 'phaser-app',
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 1280,
      height: 720,
      min: {
        width: 426,
        height: 240,
      },
      max: {
        width: 1920,
        height: 1080,
      },
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
  game.scene.start(SceneName.Boot);
};

export { App };
