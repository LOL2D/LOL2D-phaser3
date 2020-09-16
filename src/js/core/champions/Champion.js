// https://leagueoflegends.fandom.com/wiki/List_of_champions
import { TYPES } from '../../constants';

export class Champion {
  constructor({ skin, stats, abilities }) {
    this.type = TYPES.Champion;

    this.skin = this.getSkin(skin);
    this.stats = this.getStats(stats);
    this.abilities = this.getAbilities(abilities);
  }

  getAbilities(abilitiesObj) {
    const resultAbilities = {};

    abilitiesObj.keys.forEach((abiKey) => {
      const AbilityConstructor = abilitiesObj[abiKey];

      if (typeof AbilityConstructor === 'function') {
        resultAbilities[abiKey] = new AbilityConstructor({ owner: this });
      } else {
        resultAbilities[abiKey] = AbilityConstructor;
      }
    });

    return resultAbilities;
  }
}

export default Champion;
