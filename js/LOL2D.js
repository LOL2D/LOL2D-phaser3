import { SceneManager } from './libs/sceneManager.js';
import { Loading } from './scenes/Loading.js';
import { Global } from './stores/Global.js';

const LOL2D = function (_) {
  _.setup = function () {
    Global.p5 = _; // save instant of p5

    _.createCanvas(window.innerWidth, window.innerHeight);

    const sceneManager = new SceneManager(Global.p5);
    sceneManager.wire();
    sceneManager.showScene(Loading);
  };

  _.windowResized = function () {
    _.resizeCanvas(window.innerWidth, window.innerHeight, true);
  };
};

export { LOL2D };
