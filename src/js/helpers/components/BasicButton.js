import Phaser from 'phaser';

export class BasicButton extends Phaser.GameObjects.Sprite {
  constructor({ scene, key, up, over, down, x, y }) {
    // call the constructor of the parent
    // set at 0,0 in case there is no x and y
    // in the config
    super(scene, x, y, key, up);

    // save frames into this
    this.frames = {
      up,
      down,
      over,
    };

    // add this to the scene
    scene.add.existing(this);

    // make interactive and set listeners
    this.setInteractive({ useHandCursor: true });
    this.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, this.onDown, this);
    this.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, this.onUp, this);
    this.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, this.onOver, this);
    this.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, this.onUp, this);
  }

  onDown() {
    this.setFrame(this.frames.down);
  }

  onOver() {
    this.setFrame(this.frames.over);
  }

  onUp() {
    this.setFrame(this.frames.up);
  }
}

export default BasicButton;
