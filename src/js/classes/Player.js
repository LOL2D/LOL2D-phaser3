import Phaser from 'phaser';

export default class Player {
  constructor(config) {
    const {
      x = 0,
      y = 0,
      name = 'Player',
      money = 0,
      items = [],
      level = 1,
      exp = 0,
      scene,
    } = config;

    this.scene = scene;
    this.x = x;
    this.y = y;

    this.init();
  }

  init() {
    this.scene.input.on(Phaser.Input.Events.POINTER_DOWN, (e) => {
      this.x = e.x;
      this.y = e.y;
    });
  }

  setChampion(champion) {
    this.champion = champion;
  }

  control() {}

  update() {}
}
