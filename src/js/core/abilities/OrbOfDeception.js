import { Ability } from './Ability';
import { TYPES } from '../../helpers/constants';

export class OrbOfDeception extends Ability {
  constructor(config = {}) {
    const { stats = OrbOfDeception.default.stats, owner } = config;

    super({ owner, stats });
  }

  fire() {
    if (this.isAvailable()) {
      // eslint-disable-next-line no-console
      console.log('Ahri Q fired');
    }
  }

  isAvailable() {
    return this.owner.stats.mana >= this.stats.const[this.owner.getLevel()];
  }
}

OrbOfDeception.default = {
  info: {
    name: 'Lửa Hồ Ly',
    description: [
      'Ahri phóng ra rồi thu hồi quả cầu ma thuật của cô, gây sát thương phép trên đường bay ra và sát thương chuẩn trên đường thu về. Sau khi dùng phép trúng vài lần, quả cầu trúng địch kế tiếp sẽ hồi máu cho Ahri.',

      'Gây 40/65/90/115/140 (+) sát thương phép trên đường đi và 40/65/90/115/140 (+) sát thương chuẩn trên đường về.',

      'Các kỹ năng của Ahri tích cộng dồn Hút Hồn khi trúng kẻ địch (tối đa mỗi lần tung chiêu). Ở cộng dồn, Quả Cầu Ma Thuật kế tiếp của Ahri hồi cho cô (+) máu mỗi khi trúng 1 kẻ địch.',
    ],
  },
  stats: {
    range: 880,
    width: 180,
    speed: 1700,
    const: [65, 70, 75, 80, 85],
    constType: TYPES.Mana,
    coolDown: 7,
    damage: [40, 65, 90, 115, 140],
    additionalDamage: 35,
    additionalDamageType: TYPES.AP,
  },
};

export default OrbOfDeception;
