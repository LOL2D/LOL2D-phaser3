import Phaser from 'phaser'

import WebFontFile from '~/utils/WebFontFile'

export default class HelloWorldScene extends Phaser.Scene {
    constructor() {
        super('hello-world')
    }

    preload() {
        const fonts = new WebFontFile(this.load, 'Roboto Mono')
        this.load.addFile(fonts)
    }

    create() {
        const x = this.scale.width * 0.5
        const y = this.scale.height * 0.5

        this.add
            .text(x, y, 'Bầu trời trong xanh thăm thẳm, không một gợn mây!', {
                fontFamily: 'Roboto Mono',
                fontSize: '13px',
                color: '#fff',
            })
            .setOrigin(0.5, 0.5)
    }
}
