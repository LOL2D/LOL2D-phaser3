import Phaser from 'phaser';

export default class Player {
  constructor(config) {
    this.name = ''; // tên người chơi
    this.gold = 0; // vàng
    this.position = {
      current: {}, // vị trí hiện tại
      target: {}, // vị trí cần tới
    };
    this.bag = {
      items: [], // trang bị
      gold: 0, // vàng
    };
    // giết/chết/hỗ trợ
    this.kda = {
      kill: 0,
      die: 0,
      assist: 0,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  update() {
    // todo:
  }
}
