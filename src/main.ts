import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    render: {
        pixelArt: true,
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: true,
        },
    },
    scene: [HelloWorldScene],
}

export default new Phaser.Game(config)
