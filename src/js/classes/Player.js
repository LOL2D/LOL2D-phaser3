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
    this.playerObj = null;

    this.init();
  }

  init() {
    this.playerObj = this.scene.physics.add.image(0, 0, 'Yasuo');
    this.playerObj.setScale(0.5, 0.5);
    this.playerObj.body.setCircle(60);
    this.playerObj.setPosition(this.x, this.y);

    this.scene.physics.add.collider([this.playerObj]);

    const moveToInstance = this.scene.plugins
      .get('rexMoveTo')
      .add(this.playerObj, { speed: 200 });
    this.scene.input.on(Phaser.Input.Events.POINTER_DOWN, (pointer) => {
      this.x = pointer.x;
      this.y = pointer.y;
      moveToInstance.moveTo(this.x, this.y);
      console.log('Moving to: ', this.x, this.y);
    });
  }

  control() {}

  update() {}

  setChampion(champion) {
    this.champion = champion;
  }
}
