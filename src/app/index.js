const config = {
  title: 'Starfall',
  width: 400,
  height: 300,
  parent: 'game',
  backgroundColor: '#18216D',
};

export class StarfallGame extends Phaser.Game {
  constructor(config) {
    super(config);
  }
}

console.log(Phaser)

window.onload = () => {
  var game = new StarfallGame(config);
};
