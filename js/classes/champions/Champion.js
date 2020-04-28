// https://leagueoflegends.fandom.com/wiki/List_of_champions
import { Global } from '../../stores/Global.js';
import { Constants } from '../Constants.js';

class Champion {
  constructor({ skin, stats, abilities }) {
    this.type = Constants.Champion;

    this.skin = this.getSkin(skin);
    this.stats = this.getStats(stats);
    this.abilities = this.getAbilities(abilities);
  }

  getSkin(skinObj) {
    return { ...skinObj, avatar: Global.assets[skinObj.avatar] };
  }

  getStats(statsObj) {
    return { ...statsObj }; // clone object
  }

  getAbilities(abilitiesObj) {
    const result_abilities = {};
    for (let ability in abilitiesObj) {
      let c = abilitiesObj[ability];

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
