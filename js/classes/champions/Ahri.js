class Ahri {
  constructor() {}
}

Ahri.infomation = {
  info: {
    name: 'Ahri',
    nameVietNamese: 'Hồ ly chín đuôi',
    homeTown: 'Ionia',
    link: 'link/to/champion',
    cost: 4800,
  },
  skins: [
    {
      name: 'Mặc định',
      background: 'path/to/background',
      avatar: 'path/to/avatar',
    },
  ],
  stats: {
    health: 618,
    _health: 92, // + mỗi cấp

    mana: 443,
    _mana: 25,

    attackDamage: 56.04,
    _attackDamage: 3,

    magicalDamage: 0,
    _magicalDamage: 0,

    attackSpeed: 1000, // mili giay
    _attackSpeed: 2, // + % mỗi cấp

    attackRange: 550,

    moveSpeed: 330,

    healthRegen: 7.1, // mỗi giây
    _healthRegen: 0.6,

    manaRegen: 8.8, // mỗi giây
    _manaRegen: 0.8,

    armor: 24.38,
    _armor: 3.5,

    magicalResist: 30.5,
    _magicalResist: 0.5,
  },
  abilities: {
    P: '', // passive - thụ động - nội tại
    Q: '',
    E: '',
    W: '',
    R: '',
  },
};

export { Ahri };
