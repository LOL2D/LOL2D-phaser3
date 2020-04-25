// https://leagueoflegends.fandom.com/wiki/List_of_champions
import { Classes } from './Classes.js';
import { Types } from '../Types.js';

class Champion {
  constructor(config = {}) {
    const {} = config;

    this.type = Types.Champion;
  }
}

Champion.default = {
  info: {
    name: "Champion's name",
    nameVietNamese: 'Tên tướng trong tiếng việt',
    classes: Classes.Controller,
    subClasses: [Classes.Controller.subs.Catcher],
    homeTown: 'Quê nhà',
    link: 'https://leagueoflegends.fandom.com/wiki/List_of_champions',
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
    passive: 'ClassA', // passive - thụ động - nội tại
    q: 'ClassB',
    w: 'ClassC',
    e: 'ClassD',
    r: 'ClassE',
  },
};

export { Champion };
