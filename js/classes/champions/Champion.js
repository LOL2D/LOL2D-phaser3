// https://leagueoflegends.fandom.com/wiki/List_of_champions
import { Types } from '../Types.js';

class Champion {
  constructor(config = {}) {
    const {} = config;

    this.type = Types.Champion;
  }

  getStats(stats) {
    const result_stats = {};
    for (let stat in stats) {
      result_stats[stat] = stats[stat];
    }

    return result_stats;
  }

  getAbilities(abilities) {
    const result_abilities = {};
    for (let ability in abilities) {
      let c = abilities[ability];

      if (typeof c === 'function') {
        result_abilities[ability] = new c({ owner: this });
      } else {
        result_abilities[ability] = c;
      }
    }

    return result_abilities;
  }
}

export { Champion };
