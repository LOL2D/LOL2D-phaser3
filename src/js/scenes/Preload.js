import Phaser from 'phaser';
import { SCENES, TEXTURES } from '../constants';

export default class Preload extends Phaser.Scene {
  constructor() {
    super({ key: SCENES.PRELOAD });
  }

  init() {
    // global
    this.center_x = this.scale.width * 0.5;
    this.center_y = this.scale.height * 0.5;
  }

  preload() {
    // create loading bar
    this.createLoadingBar();

    // loading assets
    this.load.setBaseURL('https://labs.phaser.io');

    this.load.image(TEXTURES.SKY, 'assets/skies/space3.png');
    this.load.image(TEXTURES.LOGO_PHASER, 'assets/sprites/phaser3-logo.png');
    this.load.image(TEXTURES.RED_PARTICLE, 'assets/particles/red.png');

    for (let i = 0; i < 10; i += 1) {
      this.load.image(`logo${i}`, 'assets/skies/space3.png');
    }
  }

  create() {
    setTimeout(() => {
      this.scene.start(SCENES.MAINMENU);
    }, 2000);
  }

  createLoadingBar() {
    // progress bar
    const w = 320;
    const h = 50;
    const x = this.center_x - w * 0.5;
    const y = this.center_y - h * 0.5;
    const border = 10;

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(x, y, w, h);

    // progress text
    // loading...text
    const loadingText = this.make
      .text({
        x: this.center_x,
        y: this.center_y - h,
        text: 'Đang tải game',
        style: {
          font: '20px monospace',
          color: '#ffffff',
        },
      })
      .setOrigin(0.5, 0.5);

    // percent text
    const percentText = this.make
      .text({
        x: this.center_x,
        y: this.center_y,
        text: '0%',
        style: {
          font: '18px monospace',
          color: '#ffffff',
        },
      })
      .setOrigin(0.5, 0.5);

    // assets text
    const assetText = this.make
      .text({
        x: this.center_x,
        y: this.center_y + h,
        text: '',
        style: {
          font: '13px monospace',
          color: '#ffffff',
        },
      })
      .setOrigin(0.5, 0.5);

    // progress callback
    this.load.on(Phaser.Loader.Events.PROGRESS, (value) => {
      percentText.setText(`${Math.round(value * 100)}%`);
      progressBar
        .clear()
        .fillStyle(0xffffff, 1)
        .fillRect(
          x + border,
          y + border,
          (w - border * 2) * value,
          h - border * 2
        );
    });

    this.load.on(Phaser.Loader.Events.FILE_PROGRESS, (file) => {
      assetText.setText(`Đang tải tập tin: ${file.key}...`);
    });

    this.load.on(Phaser.Loader.Events.COMPLETE, () => {
      // progressBar.destroy();
      // progressBox.destroy();
      // loadingText.destroy();
      // percentText.destroy();
      // assetText.destroy();
    });
  }
}
