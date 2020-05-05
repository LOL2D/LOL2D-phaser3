class Player {
  constructor(config) {
    const {
      name = 'Player',
      money = 0,
      items = [],
      level = 1,
      exp = 0,
    } = config;
  }

  control(champion) {}
}

export { Player };
