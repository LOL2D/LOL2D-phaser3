// import * as abilities from '../abilities/Abilities.js';
import { Classes } from './Classes.js';
import { Champion } from './Champion.js';
import { LuaHoLy } from '../abilities/Abilities.js';

class Ahri extends Champion {
  constructor() {
    super();

    this.stats = this.getStats(Ahri.default.stats);
    this.abilities = this.getAbilities(Ahri.default.abilities);

    console.log(this);
  }

  show() {
    
  }
}

// static properties
Ahri.default = {
  info: {
    name: 'Ahri',
    nameVietNamese: 'Hồ Ly Chín Đuôi',
    classes: Classes.Mage,
    subClasses: [Classes.Mage.subs.Burst],
    homeTown: 'Ionia',
    link: 'https://leagueoflegends.fandom.com/wiki/Ahri',
    price: 4800,
  },
  skins: {
    default: {
      name: 'Mặc định',
      background: 'path/to/background',
      avatar: 'path/to/avatar',
    },
    1: {},
  },
  score: {
    // Điểm của từng chỉ số tướng trên thang 10 điểm
    // Lấy từ: https://lienminh.fandom.com/wiki/Ahri
    defense: 4,
    attack: 3,
    magic: 8,
    difficulty: 5,
  },
  stats: {
    // Chỉ số cơ bản của tướng - dưới đây ví dụ là chỉ số của arhi
    // lấy từ: https://lienminh.fandom.com/wiki/Ahri
    health: 618, // máu
    _health: 92, // máu cộng thêm mỗi cấp

    mana: 443, // năng lượng
    _mana: 25, // năng lượng cộng thêm mỗi cấp

    attackDamage: 56.04, // sát thương
    _attackDamage: 3, // sát thương cộng thêm mỗi cấp

    magicalDamage: 0, // sát thương phép
    _magicalDamage: 0, // sát thương phép cộng thêm mỗi cấp

    attackSpeed: 0.668, // tốc độ đánh - hiện tại tính theo giây
    _attackSpeed: 2, // tốc độ đánh cộng thêm mỗi cấp - cộng theo %

    attackRange: 550, // tầm đánh

    moveSpeed: 330, // tốc chạy

    healthRegen: 7.1, // máu hồi phục (mỗi giây)
    _healthRegen: 0.6, // máu hồi phục (mỗi giây) cộng thêm theo cấp

    manaRegen: 8.8, // năng lượng hồi phục (mỗi giây)
    _manaRegen: 0.8, // năng lượng hồi phục (mỗi giây) cộng them theo cấp

    armor: 24.38, // giáp
    _armor: 3.5, // giáp cộng thêm theo cấp

    magicalResist: 30.5, // kháng phép
    _magicalResist: 0.5, // kháng phép cộng thêm theo cấp
  },
  abilities: {
    passive: null, // passive - thụ động - nội tại
    q: LuaHoLy,
    w: null,
    e: null,
    r: null,
  },
};

export { Ahri };
