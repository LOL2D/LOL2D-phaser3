import Phaser from 'phaser';

var config = {
  type: Phaser.CANVAS,
  width: 800,
  height: 600,
  backgroundColor: '#010101',
  parent: 'game',
};

window.onload = function() {
  var game = new Phaser.Game(config);
}
