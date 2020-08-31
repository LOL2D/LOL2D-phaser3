import Phaser from 'phaser';
import { SCENES, FONTS, COLORS } from '../constants';

export default class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: SCENES.MAINMENU });
  }

  init() {
    this.centerX = this.game.config.width / 2;
    this.centerY = this.game.config.height / 2;
    this.circleSize = this.centerX > this.centerY ? this.centerX : this.centerY;
  }

  create() {
    // logo
    const logo = this.add.image(this.centerX, this.centerY, 'LolLogo');
    logo.setOrigin(0.5);

    // button
    this.createStartButton();
  }

  createStartButton() {
    // play button
    const playButton = this.add.bitmapText(
      this.centerX,
      this.centerY + 70,
      FONTS.PIXEL,
      'START',
      17
    );
    playButton.setTint(COLORS.MEDIUMGOLD);
    playButton.setAlpha(0);
    playButton.setOrigin(0.5);
    playButton.setInteractive({
      // cursor: 'pointer',
      useHandCursor: true,
    });

    // hover effect
    playButton.on(Phaser.Input.Events.POINTER_OVER, () => {
      playButton.setTint(COLORS.LIGHTGOLD);
    });
    playButton.on(Phaser.Input.Events.POINTER_OUT, () => {
      playButton.setTint(COLORS.MEDIUMGOLD);
    });

    // fade in button effect
    this.tweens.add({
      targets: playButton,
      alpha: { from: 0, to: 1 },
      duration: 500,
      ease: 'easeOut',
    });

    // onclick play button
    playButton.on(Phaser.Input.Events.POINTER_DOWN, () => {
      // circle effect
      const circle = this.add.circle(
        this.centerX,
        this.centerY,
        0,
        COLORS.GRAY1
      );

      this.tween = this.tweens.add({
        targets: circle,
        radius: this.circleSize * 2,
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
