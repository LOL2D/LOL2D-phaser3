import { Scene } from 'phaser';
import { SceneName } from "./Constants";

export class Boot extends Scene {
  constructor() {
    super({ key: SceneName.Boot });
  }

  init() {

  }
  preload() {

  }
  create() {
    this.scene.start(SceneName.Preload);
  }
}
