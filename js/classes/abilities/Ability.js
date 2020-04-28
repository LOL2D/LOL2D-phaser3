import { Constants } from '../Constants.js';

class Ability {
  constructor({ owner, stats }) {
    this.type = Constants.Ability;
    this.owner = owner;
    this.stats = this.getStats(stats);
  }

  getStats(statsObj) {
    return { ...statsObj };
  }
}

export { Ability };
