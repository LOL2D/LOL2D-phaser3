import { SceneManager } from './libs/sceneManager.js';
import { Loading } from './scenes/Loading.js';
import { Global } from './stores/Global.js';

const LOL2D = function (p5) {
  p5.setup = function () {
    Global.p5 = p5; // save instant of p5

    p5.createCanvas(window.innerWidth, window.innerHeight);

    const sceneManager = new SceneManager(Global.p5);
    sceneManager.wire();
    sceneManager.showScene(Loading);
  };

  p5.windowResized = function () {
    p5.resizeCanvas(window.innerWidth, window.innerHeight, true);
  };
};

export { LOL2D };
