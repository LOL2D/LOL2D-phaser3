import { TYPES } from '../../constants';

export class Ability {
  constructor({ owner, stats }) {
    this.type = TYPES.Ability;
    this.owner = owner;
    this.stats = this.getStats(stats);
  }
}

export default Ability;
