import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import InputTextPlugin from 'phaser3-rex-plugins/plugins/inputtext-plugin';

const plugins = {
  global: [
    {
      key: 'rexInputTextPlugin',
      plugin: InputTextPlugin,
      start: true,
    },
  ],
  scene: [
    {
      key: 'rexUI',
      plugin: UIPlugin,
      mapping: 'rexUI',
    },
  ],
};

export default plugins;
