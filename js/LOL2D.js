import { SceneManager } from './libs/sceneManager.js';
import { Loading } from './scenes/Loading.js';
import { Global } from './stores/Global.js';

const LOL2D = function (_) {
  _.setup = function () {
    _.createCanvas(window.innerWidth, window.innerHeight);

    Global.p5 = _;

    const sceneManager = new SceneManager(Global.p5);
    sceneManager.wire();
    sceneManager.showScene(Loading);
  };

  _.windowResized = function () {
    _.resizeCanvas(window.innerWidth, window.innerHeight, true);
  };
};

export { LOL2D };
