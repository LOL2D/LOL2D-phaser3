import { Scene } from 'phaser';
import { SceneName } from "./Constants";

export class Preload extends Scene {
  constructor() {
    super({ key: SceneName.Preload });
  }

  init() {

  }
  preload() {

  }
  create() {
    this.scene.start(SceneName.MainMenu);
  }
}
