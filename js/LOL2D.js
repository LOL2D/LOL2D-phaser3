import { SceneManager } from './libs/sceneManager.js';
import { Loading } from './scenes/Loading.js';

const LOL2D = function (_) {
  _.setup = function () {
    _.createCanvas(window.innerWidth, window.innerHeight);

    const sceneManager = new SceneManager(_);
    sceneManager.wire();
    sceneManager.showScene(Loading);
  };

  _.windowResized = function () {
    _.resizeCanvas(window.innerWidth, window.innerHeight, true);
  };
};

export { LOL2D };