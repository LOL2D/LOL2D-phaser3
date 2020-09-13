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

    // scene chứa player
    this.scene = scene;
    // vị trí
    this.x = x;
    this.y = y;
    // vị trí muốn tới
    this.targetObj = null;
    // object player chứa physic
    this.playerObj = null;

    this.init();
  }

  init() {
    // target object - tạo trước player để nó được vẽ trước player => ko đè lên player
    this.targetObj = this.scene.add.image(this.x, this.y, 'BlueDot');

    // player object
    this.playerObj = this.scene.physics.add.image(0, 0, 'Yasuo');
    this.playerObj.body.setCircle(60);
    this.playerObj.setPosition(this.x, this.y);

    this.scene.physics.add.collider([this.playerObj]);

    // move player
    const moveToInstance = this.scene.plugins
      .get('rexMoveTo')
      .add(this.playerObj, { speed: 200 });

    this.scene.input.on(Phaser.Input.Events.POINTER_DOWN, (pointer) => {
      const { worldX, worldY } = pointer;
      this.targetObj.setPosition(worldX, worldY);
      moveToInstance.moveTo(worldX, worldY);
    });
  }

  control() {}

  update() {}

  setChampion(champion) {
    this.champion = champion;
  }
}
