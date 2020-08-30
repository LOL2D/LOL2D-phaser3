import Phaser from 'phaser';
import { SCENES, TEXTURES, FONTS } from '../constants';

export default class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: SCENES.MAINMENU });
  }

  create() {
    // variables
    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;
    const circleSize = centerX > centerY ? centerX : centerY;

    // logo
    const logo = this.add.image(centerX, centerY, TEXTURES.LOL_LOGO);
    logo.setOrigin(0.5);

    // play button
    const playButton = this.add.bitmapText(
      centerX,
      centerY + 60,
      FONTS.PIXEL,
      'Play',
      17
    );
    playButton.setOrigin(0.5);
    playButton.setInteractive();

    // hover effect
    playButton.on(Phaser.Input.Events.POINTER_OVER, () => {
      playButton.setTint(0x00ff00);
    });
    playButton.on(Phaser.Input.Events.POINTER_OUT, () => {
      playButton.setTint(0xffffff);
    });

    // onclick play button
    playButton.on(Phaser.Input.Events.POINTER_DOWN, () => {
      // circle effect
      const circle = this.add.circle(centerX, centerY + 60, 0, 0xffffff);
      this.tween = this.tweens.add({
        targets: circle,
        radius: circleSize * 2,
        delay: 200,
        duration: 700,
        ease: 'easeOut',
        onComplete: () => {
          this.scene.start(SCENES.INGAME);
        },
      });
    });
  }
}
